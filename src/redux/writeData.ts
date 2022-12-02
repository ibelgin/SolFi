import {User} from './actionTypes';

const initValue = {
  name: '',
};

const writeData = (state = initValue, action: any) => {
  switch (action.type) {
    case User.NAME:
      return {
        ...state,
        name: action.name,
      };
    default:
      return state;
  }
};

export default writeData;
