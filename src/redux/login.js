import {createSlice} from '@reduxjs/toolkit';
export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userName: '',
    password: '',
  },
  reducers: {
    setUserName: (state, action) => {
      return {
        ...state,
        userName: action.payload,
      };
    },
    setPassword: (state, action) => {
      return {
        ...state,
        password: action.payload,
      };
    },
  },
});

export const {setUserName, setPassword} = loginSlice.actions;

export default loginSlice.reducer;
