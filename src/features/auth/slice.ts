import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./types/authState";
import type { IndicatorStepkey } from "./types/authSteps";

const initialState: AuthState = {
  step: "techStack",
  authMethod: "email",
  loading: false,
  isOpen: true,
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
    addCompletedSteps: (state, action: PayloadAction<IndicatorStepkey>) => {
      if (!state.completedSteps.includes(action.payload)) {
        state.completedSteps.push(action.payload);
      }
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
