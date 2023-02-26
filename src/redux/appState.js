import {createSlice} from '@reduxjs/toolkit';
export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    loading: false,
  },
  reducers: {
    setAppState: (_, action) => {
      return {
        loading: action.payload,
      };
    },
  },
});

export const {setAppState} = appStateSlice.actions;

export default appStateSlice.reducer;
