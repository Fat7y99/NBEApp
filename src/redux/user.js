import {createSlice} from '@reduxjs/toolkit';
export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    uid: '',
    token: '',
  },
  reducers: {
    setUserData: (state, action) => {
      return {
        ...action.payload,
      };
    },
  },
});

export const {setUserName, setPassword} = userSlice.actions;

export default userSlice.reducer;
