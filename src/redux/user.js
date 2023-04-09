import {createSlice} from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    uid: '',
    token: '',
    accounts: [],
    history: [],
    amount: 0,
    id: '',
  },
  reducers: {
    setUserData: (state, action) => {
      return {...action.payload};
    },
    setUserAccounts: (state, action) => {
      return {...state, accounts: action.payload};
    },
    setUserAmount: (state, action) => {
      return {...state, amount: action.payload};
    },
  },
});

export const {setUserData, setUserAccounts, setUserAmount} = userSlice.actions;

export default userSlice.reducer;
