import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {WEB_CLIENT_ID, SCOPE} from 'shared/private';

function initialConfig() {
  GoogleSignin.configure({
    scopes: [SCOPE],
    webClientId: WEB_CLIENT_ID,
    offlineAccess: true,
  });
}

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

function onSignIn(val: any) {
  console.log(val);
}

export {initialConfig, signIn, onSignIn};
