import ProjectListItem from "./ProjectListItem";

export default function ProjectList() {
  return (
    <div className="flex flex-col gap-4 w-full items-center bg-white/10 backdrop-blur-lg rounded-xl">
      <div>Project Tab component</div>
      <div>Search Bar component</div>

      <div className="flex flex-col gap-3 w-full p-7">
        <div>
          <ProjectListItem
            title="Project 1"
            members={5}
            image="/images/project1.jpg"
          />
        </div>
        <div>
          <ProjectListItem
            title="Project 2"
            members={3}
            image="/images/project2.jpg"
          />
        </div>
        <div>
          <ProjectListItem
            title="Project 3"
            members={7}
            image="/images/project3.jpg"
          />
        </div>
      </div>
    </div>
  );
}
// list of projects in projects tab
