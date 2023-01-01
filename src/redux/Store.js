import {configureStore} from '@reduxjs/toolkit';
import fingerPrintReducer from './fingerPrintReducer';
export const Store = configureStore({
  reducer: {
    fingerPrintRef: fingerPrintReducer,
  },
});
