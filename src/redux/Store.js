import {configureStore} from '@reduxjs/toolkit';
import fingerPrintReducer from './fingerPrintReducer';
import loginReducer from './login';
export const Store = configureStore({
  reducer: {
    fingerPrintRef: fingerPrintReducer,
    login: loginReducer,
  },
});
