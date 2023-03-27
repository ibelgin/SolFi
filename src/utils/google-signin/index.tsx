import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {WEB_CLIENT_ID, SCOPE} from 'shared/private';

/**
 * Intialize the GoogleSignIn Variable
 * called in useEffect or ComponentDidMount
 */
function initialConfig() {
  GoogleSignin.configure({
    scopes: [SCOPE],
    webClientId: WEB_CLIENT_ID,
    offlineAccess: true,
  });
}

async function signInWithGoogle(): Promise<
  GoogleSignin.GoogleSigninUser | any
> {
  try {
    await GoogleSignin.hasPlayServices();
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (isSignedIn) {
      const userInfo = await GoogleSignin.signInSilently();
      return userInfo;
    } else {
      const userInfo = await GoogleSignin.signIn();
      return userInfo;
    }
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      return signInWithGoogle();
    } else {
      throw new Error("Couldn't Sign In ");
    }
  }
}

export {initialConfig, signInWithGoogle};
