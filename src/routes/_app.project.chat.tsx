import ChatPage from "@/features/chat/pages/ChatPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/project/chat")({
  component: ChatPage,
});
