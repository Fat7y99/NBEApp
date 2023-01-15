import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './login';
import fingerPrintReducer from './fingerPrint';
export const Store = configureStore({
  reducer: {
    login: loginReducer,
    fingerPrint: fingerPrintReducer,
  },
});
