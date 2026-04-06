import { useAppDispatch } from "@/hooks/useAppHook";
import { Trash2, MessageSquare, Users, LogOut } from "lucide-react";
import { setActiveAction, setSelectedProject } from "../slice";
import type { ActionType, Project } from "../types/projectModel";

type ProjectListItemProps = {
  project: Project;
  actionType?: ActionType;
  onChat?: () => void;
};

export default function ProjectListItem({
  project,
  actionType,
  onChat,
}: ProjectListItemProps) {
  const dispatch = useAppDispatch();

  const handleAction = () => {
    if (!actionType) return;
    dispatch(setSelectedProject(project));
    dispatch(setActiveAction(actionType));
  };

  return (
    <div className="w-full flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-md p-2.5 sm:p-3 hover:bg-white/15 transition">
      {/* Left Section */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <img
          src={project.image_url || "/images/default.jpg"}
          alt={project.title}
          className="w-16 h-10 sm:w-20 sm:h-12 rounded-md object-cover flex-shrink-0"
        />

        <div className="flex flex-col min-w-0">
          <h3 className="text-white text-sm sm:text-base font-semibold truncate">
            {project.title}
          </h3>

          <div className="flex items-center gap-1 text-gray-300 text-xs sm:text-sm">
            <Users size={14} />
            <span>{project.required_roles?.length || 0} Members</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        <button
          onClick={handleAction}
          className="text-red-500 hover:text-red-400 transition"
        >
          {actionType === "delete" ? (
            <Trash2 size={18} className="cursor-pointer" />
          ) : (
            <LogOut size={18} className="cursor-pointer" />
          )}
        </button>

        <button
          onClick={onChat}
          className="text-cyan-400 hover:text-cyan-300 transition cursor-pointer"
        >
          <MessageSquare size={18} className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
