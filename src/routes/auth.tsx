import { createFileRoute } from "@tanstack/react-router";
import AuthPortal from "@/features/auth/pages/AuthPortal";

export const Route = createFileRoute("/auth")({
  component: AuthPortal,
});
