import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./types/authState";
import type { AuthStep, IndicatorStepkey } from "./types/authSteps";

const initialState: AuthState = {
  step: "login",
  authMethod: "email",
  loading: false,
  isOpen: false,
  isAuthenticated: false,
  data: {},
  completedSteps: [],
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<AuthStep>) => {
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
    addCompletedSteps: (state, action: PayloadAction<IndicatorStepkey>) => {
      if (!state.completedSteps.includes(action.payload)) {
        state.completedSteps.push(action.payload);
      }
    },
    loginSuccess: (state) => {
      state.isAuthenticated = true;
      state.isOpen = false;
    },
    logoutAction: (state) => {
      localStorage.removeItem("access_token");
      state.isAuthenticated = false;
      state.step = "login";
      state.data = {};
      state.completedSteps = [];
      state.isOpen = true; // Opens the AuthPortal to force a re-login
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const {
  setStep,
  setIsOpen,
  updateData,
  setAuthMethod,
  addCompletedSteps,
  loginSuccess,
  logoutAction,
  setAuthenticated,
} = authSlice.actions;
export default authSlice.reducer;
