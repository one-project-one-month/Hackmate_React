import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    step: "accountInfo",
    isOpen: false,
    data: {},
  },
  reducers: {
    setStep: (state, action) => (state.step = action.payload),
    openPortal: (state) => {
      state.isOpen = true;
    },
    closePortal: (state) => {
      state.isOpen = false;
    },
    updateData: (state, action) =>
      (state.data = { ...state.data, ...action.payload }),
  },
});

export const { setStep, openPortal, closePortal, updateData } =
  authSlice.actions;
export default authSlice.reducer;
