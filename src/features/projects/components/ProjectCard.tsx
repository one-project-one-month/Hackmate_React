import { useAppSelector } from "@/hooks/useAppHook";
import type { Project } from "../types/projectModel";
import RoleTag from "./RoleTag";
import { Loader2 } from "lucide-react";

const ProjectCard = () => {
  const { feedProjects, currentIndex, isLoading } = useAppSelector(
    (state) => state.projects
  );

  const project: Project | undefined = feedProjects[currentIndex];

  if (isLoading) {
    return (
      <div className="w-full h-[620px] bg-[#121212] rounded-3xl border border-gray-800 flex items-center justify-center">
        <Loader2 className="animate-spin text-cyan-400 w-10 h-10" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="w-full h-[620px] bg-[#121212] rounded-3xl border border-gray-800 flex flex-col items-center justify-center gap-4">
        <p className="text-zinc-400 text-xl">No more projects to browse!</p>
        <p className="text-zinc-500 text-sm">Check back later for new projects.</p>
      </div>
    );
  }

  return (
    <div
      className="w-full 
      h-[620px] bg-[#121212] rounded-3xl border border-gray-800 
      overflow-hidden shadow-2xl mx-auto"
    >
      <img
        src={project.image_url || "https://images.template.net/551106/Gradient-Background-edit-online.webp"}
        alt={project.title}
        className="w-full h-[150px] object-cover"
      />

      <div className="p-5 flex flex-col items-center">
        <span className="bg-[#1e4d4d] text-[#4dd0e1] text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-6">
          {project.type}
        </span>

        <h2 className="text-3xl font-bold text-white mb-6">{project.title}</h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-xl text-center mb-8 line-clamp-4">
          {project.description}
        </p>

        {project.github_repo && (
          <a
            href={project.github_repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-full transition-all mb-10"
          >
            {project.github_repo}
          </a>
        )}

        {project.required_roles && project.required_roles.length > 0 && (
          <div className="w-full border-t border-gray-800 pt-4">
            <p className="text-center text-sm text-zinc-400 uppercase tracking-widest mb-6">
              Required Role:
            </p>
            <div className="flex justify-center gap-4">
              {project.required_roles.map((role) => (
                <RoleTag key={typeof role === "string" ? role : role.id} role={role as any} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
