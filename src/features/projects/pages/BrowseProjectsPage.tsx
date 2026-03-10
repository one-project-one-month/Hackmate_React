import ProjectCard from "../components/ProjectCard";
import SwipeAction from "../components/SwipeAction";
import SwipeHint from "../components/SwipeHint";

// BrowseProjectsPage.tsx
export default function BrowseProjectsPage() {
  return (
    <div className="min-h-screen py-5 px-15 flex flex-col justify-start items-start">
      {/* Header section */}
      <div className="">
        <h1 className="text-5xl font-bold font-serif text-zinc-200 leading-relaxed">
          Browse Projects
        </h1>
        <p className="text-zinc-400 mb-8">
          Explore all available projects and quickly find what you are looking
          for.
        </p>
      </div>
      {/* <ProjectCard /> */}
      <ProjectCard />
      {/* <SwipeHint /> */}
      <SwipeHint />
      {/* <SwipeActions /> */}
      <SwipeAction />
    </div>
  );
}
