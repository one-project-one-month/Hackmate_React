import MyProjectsPage from "@/features/projects/pages/MyProjectsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/projects")({
  component: MyProjectsPage,
});
