import {createSlice} from '@reduxjs/toolkit';
export const fingerPrintSlice = createSlice({
  name: 'fingerPrint',
  initialState: {
    isOpened: false,
  },
  reducers: {
    toggleSheet: (state, action) => {
      return {isOpened: action.payload};
    },
  },
});

export const {toggleSheet} = fingerPrintSlice.actions;

export default fingerPrintSlice.reducer;
