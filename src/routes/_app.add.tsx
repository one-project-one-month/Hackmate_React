import { createProject } from "@/features/projects/api/api";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/add")({
  component: createProject,
});
