import RoleTag from "./RoleTag";

const ProjectCard = () => {
  const project = {
    type: "Mobile",
    title: "Food Delivery Platform",
    description:
      "A seamless app connecting restaurants and customers, with fast ordering, real-time tracking, and secure payments. This platform is designed to scale efficiently while providing a premium user experience for both diners and restaurant staff, ensuring high performance across all mobile devices.",
    github_repo: "https://github.com/username/floral-pos-system",
    required_roles: [
      { id: 1, label: "Designer" },
      { id: 2, label: "Frontend" },
      { id: 3, label: "Backend" },
      { id: 4, label: "DevOps" },
    ],
    image_url:
      "https://images.template.net/551106/Gradient-Background-edit-online.webp",
  };

  return (
    <div
      className="w-full 
      h-[620px] bg-[#121212] rounded-3xl border border-gray-800 
      overflow-hidden shadow-2xl mx-auto"
    >
      <img
        src={project.image_url}
        alt={project.title}
        className="w-full h-[150px] object-cover"
      />

      <div className="p-5 flex flex-col items-center">
        <span className="bg-[#1e4d4d] text-[#4dd0e1] text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider mb-6">
          {project.type}
        </span>

        <h2 className="text-3xl font-bold text-white mb-6">{project.title}</h2>
        <p className="text-gray-400 text-base leading-relaxed max-w-xl text-center mb-8 line-clamp-4">
          {project.description}
        </p>

        <a
          href={project.github_repo}
          className="text-sm text-gray-300 hover:text-white border border-gray-700 hover:border-gray-500 px-6 py-3 rounded-full transition-all mb-10"
        >
          {project.github_repo}
        </a>

        <div className="w-full border-t border-gray-800 pt-4">
          <p className="text-center text-sm text-zinc-400 uppercase tracking-widest mb-6">
            Required Role:
          </p>
          <div className="flex justify-center gap-4">
            {project.required_roles.map((role) => (
              <RoleTag role={role} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
