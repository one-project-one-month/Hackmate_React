import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "./types/authState";

const initialState: AuthState = {
  step: "otpVerification",
  authMethod: "email",
  loading: false,
  isOpen: false,
  data: {},
  completedSteps: [],
};
const authSlice = createSlice({
  name: "auth",
  initialState,
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
    setAuthMethod: (state, action) => (state.authMethod = action.payload),
    addCompletedSteps: (state, action) => {
      state.completedSteps.push(action.payload);
    },
  },
});

export const {
  setStep,
  openPortal,
  closePortal,
  updateData,
  setAuthMethod,
  addCompletedSteps,
} = authSlice.actions;
export default authSlice.reducer;
