import {User} from './actionTypes';

//userData = {
//     email: <String>,
//     familyName: <String>,
//     givenName: <String>,
//     id: <String>,
//     name: <String>,
//     photo: <Image URI>,
//   };

const initValue = {
  userData: {},
};

const writeData = (state = initValue, action: any) => {
  switch (action.type) {
    case User.USERDATA:
      return {
        ...state,
        userData: action.userData,
      };
    default:
      return state;
  }
};

export default writeData;
