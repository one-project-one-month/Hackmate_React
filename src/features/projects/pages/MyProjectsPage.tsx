import ProjectList from "../components/ProjectList";
import ProjectTab from "../components/ProjectTab";

// MyProjectsPage.tsx
export default function MyProjectsPage() {
  return (
    <div className="min-h-screen p-5 flex flex-col justify-start items-start">
      {/* Header section */}
      <div className="mb-5">
        <h1 className="text-5xl font-serif font-bold text-zinc-200 leading-relaxed">
          Project Group List
        </h1>
        <p className="text-zinc-400">
          An overview of all project groups you have created and joined for
          active collaboration.
        </p>
      </div>

      <ProjectList />
      {/* <ProjectList /> */}
    </div>
  );
}
