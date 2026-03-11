import { useState } from "react";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState<"created" | "joined">("created");

  return (
    <div className="flex w-full rounded-md bg-slate-600/20   backdrop-blur-md p-2 shadow-lg">
      <button
        onClick={() => setActiveTab("created")}
        className={`
          flex-1 rounded-md px-6 py-3 text-sm text-white font-medium transition-all duration-200 ease-in-out cursor-pointer 
          ${
            activeTab === "created"
              ? "bg-white/10  shadow-inner shadow-slate-900/30"
              : ""
          }
        `}
      >
        Created Projects
      </button>
      <button
        onClick={() => setActiveTab("joined")}
        className={`
          flex-1 rounded-md px-6 p-3 text-sm text-white font-medium transition-all duration-200 ease-in-out cursor-pointer
          ${
            activeTab === "joined"
              ? "bg-white/10  shadow-inner shadow-slate-900/30"
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
