import { useState } from "react";
import ProjectListItem from "./ProjectListItem";
import DeleteOrLeaveDialog from "./DeleteOrLeaveDialog";
import { mockProjects } from "../mock";

export default function ProjectList() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [actionType, setActionType] = useState<"delete" | "leave">("leave");

  const handleActionClick = (project: any, type: "delete" | "leave") => {
    setSelectedProject(project);
    setActionType(type);
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    if (!selectedProject) return;

    if (actionType === "delete") {
      console.log("Delete project:", selectedProject.id);
    }

    if (actionType === "leave") {
      console.log("Leave project:", selectedProject.id);
    }

    setDialogOpen(false);
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full items-center bg-white/10 backdrop-blur-lg rounded-2xl">
      <div className="text-white text-lg mt-4">Project Tab component</div>
      <div className="text-white">Search Bar component</div>

      <div className="flex flex-col gap-3 w-full h-115 p-7 overflow-y-auto custom-scrollbar">
        {mockProjects.map((project) => (
          <ProjectListItem
            key={project.id}
            title={project.title}
            members={project.required_roles.length}
            actionType="delete" //delete or leave
            image={project.image_url || "/images/default.jpg"}
            onAction={() => handleActionClick(project, "delete")} // delete or leave
          />
        ))}
      </div>

      {/* Dynamic Alert Dialog */}
      <DeleteOrLeaveDialog
        open={dialogOpen}
        title={
          actionType === "delete"
            ? "Delete this project?"
            : "Leave this project?"
        }
        message={
          actionType === "delete"
            ? "Are you sure you want to delete this project?"
            : "Are you sure you want to leave this project?"
        }
        confirmText={actionType === "delete" ? "Delete" : "Leave"}
        onConfirm={handleConfirm}
        onCancel={() => setDialogOpen(false)}
      />
    </div>
  );
}
// list of projects in projects tab
