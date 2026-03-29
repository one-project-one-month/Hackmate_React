import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import SideBar from "@/components/SideBar";

import { store } from "@/app/store";

export const Route = createFileRoute("/_app")({
  beforeLoad: () => {
    // Global Auth Guard: Check Redux state OR persistent localStorage
    const isAuth = store.getState().auth.isAuthenticated;
    const hasToken = !!localStorage.getItem("access_token");

    if (!isAuth && !hasToken) {
      throw redirect({ to: '/' });
    }
  },
  component: () => (
    <div className="flex min-h-screen bg-radial from-fuchsia-900 to-indigo-950">
      <SideBar />
      <main className="flex-1 ml-72">
        <Outlet />
      </main>
    </div>
  ),
});
