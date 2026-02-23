import { createFileRoute } from "@tanstack/react-router";
import { BrowseProjectsPage } from "../../features/projects/pages/BrowseProjectsPage";

export const Route = createFileRoute("/projects/browse")({
  component: BrowseProjectsPage,
});
