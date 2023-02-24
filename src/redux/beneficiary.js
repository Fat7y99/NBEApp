import {createSlice} from '@reduxjs/toolkit';
export const beneficiarySlice = createSlice({
  name: 'beneficiary',
  initialState: {
    firstName: null,
    lastName: null,
    bankBranch: null,
    accountNumber: null,
    phoneNumber: null,
    imageUrl: null,
    email: null,
    valid: false,
  },
  reducers: {
    setbeneficiaryData: (state, action) => {
      return {
        ...state,
        [action.payload.first]: action.payload.last,
      };
    },
  },
});

export const {setbeneficiaryData} = beneficiarySlice.actions;

export default beneficiarySlice.reducer;
