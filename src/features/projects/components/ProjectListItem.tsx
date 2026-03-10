import { Trash2, MessageSquare, Users } from "lucide-react";

type ProjectListItemProps = {
  title: string;
  members: number;
  image: string;
  onDelete?: () => void;
  onChat?: () => void;
};

export default function ProjectListItem({
  title,
  members,
  image,
  onDelete,
  onChat,
}: ProjectListItemProps) {
  return (
    <div className="w-full flex items-center justify-between bg-white/10 backdrop-blur-lg rounded-xl p-3 sm:p-4 hover:bg-white/15 transition">
      <div className="flex items-center gap-3 sm:gap-4 min-w-0">
        <img
          src={image}
          alt={title}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-md object-cover flex-shrink-0"
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
          onClick={onDelete}
          className="text-red-500 hover:text-red-400 transition"
        >
          <Trash2 size={18} />
        </button>

        <button
          onClick={onChat}
          className="text-cyan-400 hover:text-cyan-300 transition"
        >
          <MessageSquare size={18} />
        </button>
      </div>
    </div>
  );
}
// project list item component for each list item
