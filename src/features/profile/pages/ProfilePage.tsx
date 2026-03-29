import React from "react";
import { Mail, User, Github, Pencil } from "lucide-react";
import TechStackBadge from "../components/TechStackBadge";
import ProfileStat from "../components/ProfileStat";

const ProfilePage: React.FC = () => {
  const techStacks = [
    "HTML",
    "CSS",
    "PHP",
    "C#",
    "JAVA",
    "Python",
    "Flutter",
    "SQL",
    "Ruby",
    "C++",
    "Dart",
    "Kotlin",
    "NextJS",
    "NestJS",
    "React Native",
  ];

  return (
    <div className="min-h-screen py-5 px-4 md:px-8 lg:px-16 flex flex-col justify-start items-start">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-zinc-200 leading-relaxed mb-6 lg:mb-10">
        My <span className="text-cyan-400">Profile</span>
      </h1>

      <div className="relative flex flex-col py-8 px-6 md:py-10 md:px-10 lg:py-12 lg:px-16 w-full md:max-w-4xl lg:max-w-full min-h-[500px] bg-white/10 backdrop-blur-lg rounded-3xl border border-white/5">
        <button className="absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 text-zinc-400 hover:text-white transition-colors">
          <Pencil size={20} />
        </button>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-8 max-w-2xl pr-12 mb-10 text-center md:text-left">
          <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-zinc-700">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hsu"
              alt="Profile Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 lg:gap-3 items-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Kelvin Jack
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 lg:gap-6 text-zinc-300">
              <span className="flex items-center gap-2 text-xs lg:text-sm">
                <User size={14} className="lg:w-4 lg:h-4" /> Front-End
              </span>
              <span className="flex items-center gap-2 text-xs lg:text-sm">
                <Mail size={14} className="lg:w-4 lg:h-4" /> name@gmail.com
              </span>
            </div>
            <button className="mt-2 flex items-center justify-center gap-2 px-3 py-1.5 lg:px-4 border border-zinc-500 rounded-lg text-xs lg:text-sm text-zinc-200 hover:bg-white/5 transition-all w-fit">
              Connect with GitHub <Github size={14} className="lg:w-4 lg:h-4" />
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center w-full px-2 md:px-4 lg:px-10 mb-12 text-center">
          <ProfileStat label="Completed" value={14} />

          <div className="h-10 lg:h-16 w-[3px] bg-zinc-200 mx-2 rounded-full"></div>

          <ProfileStat label="In Progress" value={5} />

          <div className="h-10 lg:h-16 w-[3px] bg-zinc-200 mx-2 rounded-full"></div>

          <ProfileStat label="Kick" value={3} />
        </div>

        <div className="w-full mt-auto">
          <h3 className="text-zinc-200 text-base lg:text-lg font-medium mb-4 underline underline-offset-8 decoration-zinc-500">
            Tech Stacks
          </h3>
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {techStacks.map((tech) => (
              <TechStackBadge key={tech} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
