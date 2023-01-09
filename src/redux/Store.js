import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './login';
export const Store = configureStore({
  reducer: {
    login: loginReducer,
  },
});
