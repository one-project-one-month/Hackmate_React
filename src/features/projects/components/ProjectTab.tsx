import { useAppDispatch, useAppSelector } from "@/hooks/useAppHook";
import { setActiveTab, type ProjectTab } from "../slice";

const ProjectTabs = () => {
  const activeTab = useAppSelector((state) => state.projects.activeTab);
  const dispatch = useAppDispatch();

  const handleTabChange = (tab: ProjectTab) => {
    dispatch(setActiveTab(tab));
  };

  return (
    <div className="flex w-full rounded-md bg-slate-600/20 backdrop-blur-md p-2 shadow-lg">
      <button
        onClick={() => handleTabChange("created")}
        className={`
          flex-1 rounded-md px-6 py-3 text-sm text-white font-medium transition-all duration-200 ease-in-out cursor-pointer 
          ${
            activeTab === "created"
              ? "bg-white/10 shadow-inner shadow-slate-900/30"
              : ""
          }
        `}
      >
        Created Projects
      </button>
      <button
        onClick={() => handleTabChange("joined")}
        className={`
          flex-1 rounded-md px-6 p-3 text-sm text-white font-medium transition-all duration-200 ease-in-out cursor-pointer
          ${
            activeTab === "joined"
              ? "bg-white/10 shadow-inner shadow-slate-900/30"
              : ""
          }
        `}
      >
        Joined Projects
      </button>
    </div>
  );
};

export default ProjectTabs;
