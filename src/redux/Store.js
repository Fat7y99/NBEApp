import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './login';
import userReducer from './user';
import beneficiaryReducer from './beneficiary';
import appStateReducer from './appState';
export const Store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    beneficiary: beneficiaryReducer,
    appState: appStateReducer,
  },
});
