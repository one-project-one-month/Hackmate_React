import { createSlice } from "@reduxjs/toolkit";
import type { AuthState } from "./types/authState";

const initialState: AuthState = {
  step: "techStack",
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
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    updateData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    setAuthMethod: (state, action) => {
      state.authMethod = action.payload;
    },
  },
});

export const {
  setStep,
  setIsOpen,
  updateData,
  setAuthMethod,
  addCompletedSteps,
} = authSlice.actions;
export default authSlice.reducer;
