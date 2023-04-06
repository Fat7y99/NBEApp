import {createSlice} from '@reduxjs/toolkit';
export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    loading: false,
    language: 'english',
  },
  reducers: {
    setAppState: (_, action) => {
      return {
        loading: action.payload,
      };
    },
    setLanguage: (_, action) => {
      return {
        language: action.payload,
      };
    },
  },
});

export const {setAppState, setLanguage} = appStateSlice.actions;

export default appStateSlice.reducer;
