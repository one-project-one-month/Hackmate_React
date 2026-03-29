import { api } from "@/lib/axios";
import type { FullSignUpData } from "../types/signupSchemas";
import type { LoginValues } from "../types/loginSchema";

export const registerUser = async (data: FullSignUpData) => {
  const response = await api.post("/auth/register", data);
  return response.data;
};

export const loginUser = async (data: LoginValues) => {
  const response = await api.post("/auth/login", data);
  return response.data;
}

export const forgotPassword = async (data: { email: string }) => {
  const response = await api.post("/auth/forgot-password", data);
  return response.data;
}

export const resetPassword = async (data: { email: string, otp: string, password: string }) => {
  const response = await api.post("/auth/reset-password", data);
  return response.data;
}
