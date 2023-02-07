import {createSlice} from '@reduxjs/toolkit';
export const beneficiarySlice = createSlice({
  name: 'beneficiary',
  initialState: {
    firstName: '',
    lastName: '',
    bankBranch: '',
    accountNumber: '',
    phoneNumber: '',
    imageUrl: '',
    email: '',
  },
  reducers: {
    setbeneficiaryData: (state, action) => {
      return {...state, [action.payload.first]: action.payload.last};
    },
  },
});

export const {setbeneficiaryData} = beneficiarySlice.actions;

export default beneficiarySlice.reducer;
