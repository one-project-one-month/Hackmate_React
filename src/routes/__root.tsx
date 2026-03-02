import Header from "@/components/Header";
import AuthPortal from "@/features/auth/pages/AuthPortal";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <Header />
      <AuthPortal />
      <Outlet />
    </>
  );
}
