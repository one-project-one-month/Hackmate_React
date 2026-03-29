import AuthPortal from "@/features/auth/pages/AuthPortal";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/useAppHook";
import { loginSuccess } from "@/features/auth/slice";
import { api } from "@/lib/axios";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Silently verify sessions on hard refresh
    const initSession = async () => {
      try {
        await api.get("/auth/me");
        dispatch(loginSuccess());
      } catch (err) {
        // No active session — ignore and remain logged out
      }
    };
    initSession();
  }, [dispatch]);

  return (
    <>
      <AuthPortal />
      <Outlet />
    </>
  );
}
