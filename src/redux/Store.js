import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './login';
import userReducer from './user';
import beneficiaryReducer from './beneficiary';
export const Store = configureStore({
  reducer: {
    login: loginReducer,
    user: userReducer,
    beneficiary: beneficiaryReducer,
  },
});
