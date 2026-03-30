import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/slice";
import projectReducer from "@/features/projects/slice";
import profileReducer from "../features/profile/slice";

export const store = configureStore({
  reducer: {
    // slices...
    auth: authReducer,
    projects: projectReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
