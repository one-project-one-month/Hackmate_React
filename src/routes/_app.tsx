import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import SideBar from "@/components/SideBar";

export const Route = createFileRoute("/_app")({
  beforeLoad: ({ context }) => {
    // auth guard — redirect to landing if not authenticated
    // uncomment when auth is wired up
    // if (!context.auth.user) throw redirect({ to: '/' })
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
