import CreateProjectPage from "@/features/projects/pages/CreateProjectPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/add")({
  component: CreateProjectPage,
});
