import { BrowseProjectsPage } from "@/features/projects/pages/BrowseProjectsPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/browse")({
  component: BrowseProjectsPage,
});
