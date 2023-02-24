import {createSlice} from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    uid: '',
    token: '',
    accounts: [],
    history: [],
  },
  reducers: {
    setUserData: (state, action) => {
      return {...action.payload};
    },
    setUserAccounts: (state, action) => {
      return {...state, accounts: action.payload};
    },
  },
});

export const {setUserData, setUserAccounts} = userSlice.actions;

export default userSlice.reducer;
