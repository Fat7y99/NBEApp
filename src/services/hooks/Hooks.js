import {useSelector} from 'react-redux';
export const getCurrentLanguage = () =>
  useSelector(state => state.appState.language);
export const getAppState = () => useSelector(state => state.appState.loading);
export const getCurrentBeneficiary = () =>
  useSelector(state => state.beneficiary);
export const getLoginData = () => useSelector(state => state.login);
export const getHistoryData = () => useSelector(state => state.user.history);
export const getAccountsData = () => useSelector(state => state.user.accounts);
export const getUserBalance = () => useSelector(state => state.user.amount);
export const getCurrentUserID = () => useSelector(state => state.user.id);
