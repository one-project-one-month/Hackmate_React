import {api} from "@/lib/axios";
import { type ProfileData } from "./slice";

export const fetchUserProfile = async () => {
  // Returns profile info matching ProfileData
  const response = await api.get("/auth/me");
  return response.data?.content?.user || response.data?.content || response.data;
};

// Uses PUT /users/me as requested. Avatar uses base64 strings so it can be handled natively as string in this JSON payload.
export const updateUserProfile = async (data: Partial<ProfileData>) => {
  const response = await api.put("/users/me", data);
  return response.data?.content?.user || response.data?.content || response.data;
};
