import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import stockReducer from './stockSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    stock: stockReducer,
  },
});
