import {createSlice} from '@reduxjs/toolkit';
import {useRef} from 'react';
let initalRef;
export const sayed = () => {
  initalRef = useRef(null);
};
export const fingerPrintSlice = createSlice({
  name: 'fingerPrint',
  initialState: {
    ref: initalRef,
  },
  reducers: {
    initializeRef: (state, action) => {
      initalRef = action.payload;
      return {...state, ref: action.payload};
    },
    setRef: (state, action) => {
      const pRef = initalRef;
      pRef.current = action.payload;
      return {...state, ref: pRef};
    },
  },
});

export const {setRef, initializeRef} = fingerPrintSlice.actions;

export default fingerPrintSlice.reducer;
