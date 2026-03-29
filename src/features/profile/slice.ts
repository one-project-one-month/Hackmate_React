import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface ProfileData {
  id?: string | number;
  name?: string;
  username?: string;
  email?: string;
  preferred_role?: string;
  profile_image?: string | null;
  tech_stacks?: string[];
  stats?: {
    completed: number;
    inProgress: number;
    kick: number;
  };
}

export interface ProfileState {
  data: ProfileData | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProfileState = {
  data: null,
  isLoading: false,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setProfileData: (state, action: PayloadAction<ProfileData>) => {
      state.data = { ...state.data, ...action.payload };
      
      // Initialize mock stats if they don't exist
      if (state.data && !state.data.stats) {
        state.data.stats = {
          completed: 14,
          inProgress: 5,
          kick: 3
        };
      }
    },
    setProfileLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setProfileError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setProfileData, setProfileLoading, setProfileError } = profileSlice.actions;
export default profileSlice.reducer;
