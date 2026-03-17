import notification from "@/features/noti/pages/notification";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/noti")({
  component: notification,
});
