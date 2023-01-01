import {createSlice} from '@reduxjs/toolkit';
import {useRef} from 'react';

export const fingerPrintSlice = createSlice({
  name: 'fingerPrint',
  initialState: {
    ref: useRef(null),
  },
  reducers: {},
});

export const {confirmValue, resetValue, lowerRandom, upperRandom} =
  fingerPrintSlice.actions;

export default fingerPrintSlice.reducer;
