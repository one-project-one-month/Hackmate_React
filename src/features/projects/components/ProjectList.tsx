import { useMemo } from "react";
import { Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import ProjectListItem from "./ProjectListItem";
import DeleteOrLeaveDialog from "./DeleteOrLeaveDialog";
import ProjectTabs from "./ProjectTab";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppHook";
import { setSearchQuery } from "../slice";

export default function ProjectList() {
  const dispatch = useAppDispatch();
  const { myProjects, joinedProjects, activeTab, searchQuery, isLoading } =
    useAppSelector((state) => state.projects);

  // Pick the correct list based on the active tab
  const activeProjects = activeTab === "created" ? myProjects : joinedProjects;

  // Filter based on search query
  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return activeProjects;
    const query = searchQuery.toLowerCase();
    return activeProjects.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
    );
  }, [activeProjects, searchQuery]);

  const handleConfirm = () => {
    // Handled by parent MyProjectsPage
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full items-center bg-white/10 backdrop-blur-lg rounded-2xl">
      <div className="w-full p-3">
        <ProjectTabs />
      </div>

      {/* Search Bar */}
      <div className="w-full px-7">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
          />
          <Input
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            placeholder={`Search ${activeTab === "created" ? "created" : "joined"} projects...`}
            className="pl-9 bg-white/5 border-zinc-600 text-zinc-200 placeholder:text-zinc-500 focus-visible:ring-cyan-500/50"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full h-115 p-7 overflow-y-auto custom-scrollbar">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="animate-spin text-cyan-400 w-8 h-8" />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full gap-2">
            <p className="text-zinc-400 text-sm">
              {searchQuery.trim()
                ? "No projects match your search."
                : activeTab === "created"
                  ? "You haven't created any projects yet."
                  : "You haven't joined any projects yet."}
            </p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <ProjectListItem
              key={project.id}
              project={project}
              actionType={activeTab === "created" ? "delete" : "leave"}
            />
          ))
        )}
      </div>

      {/* Dynamic Alert Dialog */}
      <DeleteOrLeaveDialog onConfirm={handleConfirm} />
    </div>
  );
}
