import ProjectListItem from "./ProjectListItem";
import { mockProjects } from "../mock";

export default function ProjectList() {
  return (
    <div className="flex flex-col gap-4 w-full h-full items-center bg-white/10 backdrop-blur-lg rounded-2xl ">
      <div className="text-white text-lg mt-4">Project Tab component</div>
      <div className="text-white">Search Bar component</div>

      <div className="flex flex-col gap-3 w-full h-115 p-7  overflow-y-auto custom-scrollbar">
        {mockProjects.map((project) => (
          <div key={project.id}>
            <ProjectListItem
              title={project.title}
              members={project.required_roles.length} //this is not member count, just for demo
              image={project.image_url || "/images/default.jpg"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
// list of projects in projects tab
