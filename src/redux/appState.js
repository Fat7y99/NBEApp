import {createSlice} from '@reduxjs/toolkit';
export const appStateSlice = createSlice({
  name: 'appState',
  initialState: {
    loading: false,
    language: 'english',
  },
  reducers: {
    setAppState: (state, action) => {
      return {...state, loading: action.payload};
    },
    setLanguage: (state, action) => {
      return {...state, language: action.payload};
    },
  },
});

export const {setAppState, setLanguage} = appStateSlice.actions;

export default appStateSlice.reducer;
