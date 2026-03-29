import { useState } from "react";
import ProjectListItem from "./ProjectListItem";
import DeleteOrLeaveDialog from "./DeleteOrLeaveDialog";
import { mockProjects } from "../mock";
import ProjectTabs from "./ProjectTab";

export default function ProjectList() {
  const [selectedProject ] = useState<any>(null);
  const [actionType] = useState<"delete" | "leave">("leave");

  // const handleActionClick = (project: any, type: "delete" | "leave") => {
  //   setSelectedProject(project);
  //   setActionType(type);
  // };

  const handleConfirm = () => {
    if (!selectedProject) return;

    if (actionType === "delete") {
      console.log("Delete project:", selectedProject.id);
    }

    if (actionType === "leave") {
      console.log("Leave project:", selectedProject.id);
    }

  };

  return (
    <div className="flex flex-col gap-4 w-full h-full items-center bg-white/10 backdrop-blur-lg rounded-2xl">
      <div className="w-full p-3">
        <ProjectTabs />
      </div>
      <div className="text-white">Search Bar component</div>

      <div className="flex flex-col gap-3 w-full h-115 p-7 overflow-y-auto custom-scrollbar">
        {mockProjects.map((project) => (
          <ProjectListItem
            key={project.id}
            title={project.title}
            members={project.required_roles.length}
            actionType="delete" //delete or leave
            image={project.image_url || "/images/default.jpg"}
          />
        ))}
      </div>

      {/* Dynamic Alert Dialog */}
      <DeleteOrLeaveDialog onConfirm={handleConfirm} />
    </div>
  );
}
// list of projects in projects tab
