import { useAppDispatch } from "@/hooks/useAppHook";
import { Trash2, MessageSquare, Users, LogOut } from "lucide-react";
import { setActiveAction } from "../slice";
import type { ActionType } from "../types/projectModel";

type ProjectListItemProps = {
  title: string;
  members: number;
  image: string;
  actionType?: ActionType;
  onChat?: () => void;
};

export default function ProjectListItem({
  title,
  members,
  image,
  actionType,
  onChat,
}: ProjectListItemProps) {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-md p-2.5 sm:p-3 hover:bg-white/15 transition">
      {/* Left Section */}
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <img
          src={image}
          alt={title}
          className="w-16 h-10 sm:w-20 sm:h-12 rounded-md object-cover flex-shrink-0"
        />

        <div className="flex flex-col min-w-0">
          <h3 className="text-white text-sm sm:text-base font-semibold truncate">
            {title}
          </h3>

          <div className="flex items-center gap-1 text-gray-300 text-xs sm:text-sm">
            <Users size={14} />
            <span>{members} Members</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
        <button
          onClick={() => dispatch(setActiveAction(actionType))}
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
