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

/**
 * Check if the User has already Signed in using SignIn() Function
 * Calls `getCurrentUserInfo()` and `SignIn()` functions
 */

async function checkIfSignedIn() {
  const isSignedIn = await GoogleSignin.isSignedIn();
  if (isSignedIn) {
    return getCurrentUserInfo();
  } else {
    return signIn();
  }
}

/**
 * Sign In as a New User Function
 */

async function signIn() {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    return userInfo;
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      return error.message;
    } else if (error.code === statusCodes.IN_PROGRESS) {
      return error.message;
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      return error.message;
    } else {
      return error.message;
    }
  }
}

/**
 * Gets the data anonymously from the user and pass it to `onSignIn()` function
 */

async function getCurrentUserInfo() {
  try {
    const userInfo = await GoogleSignin.signInSilently();
    return userInfo;
  } catch (error: any) {
    if (error.code === statusCodes.SIGN_IN_REQUIRED) {
      signIn();
    } else {
    }
  }
}

export {initialConfig, signIn, checkIfSignedIn};
