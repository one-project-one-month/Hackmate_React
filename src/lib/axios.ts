import axios from "axios";
import { store } from "@/app/store";
import { logoutAction } from "@/features/auth/slice";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

// Automatically attach Bearer token to all outgoing requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => {
    // Auto-save access tokens globally if the backend issues a new one (login, register, refresh)
    const token = response.data?.content?.access_token;
    if (token) {
      localStorage.setItem("access_token", token);
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Retry loop for 401 Unauthorized status
    if (
      error.response?.status === 401 && 
      originalRequest.url !== "/auth/refresh" && 
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        await api.post("/auth/refresh");
        // The successful refresh response interceptor above auto-saves the new token!
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh failed - force logout global state
        localStorage.removeItem("access_token");
        store.dispatch(logoutAction());
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);
