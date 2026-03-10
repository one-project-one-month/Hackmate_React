import { Link } from "@tanstack/react-router";
import { Home, Plus, FolderKanban, Bell, User, LogOut } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { icon: Home, label: "Home", to: "/browse" },
  { icon: Plus, label: "Add", to: "/projects/create" },
  { icon: FolderKanban, label: "Project", to: "/projects" },
  { icon: Bell, label: "Alert", to: "/alerts" },
  { icon: User, label: "Profile", to: "/profile" },
];

export default function Sidebar() {
  return (
    <div className="fixed left-4 top-4 h-[calc(100vh-32px)] w-60 flex flex-col justify-between items-center px-8 py-3 gap-5">
      {/* Top section — logo and nav */}
      {/* Logo */}
      <img src={logo} alt="Hackmate" className="w-24 h-24 object-contain" />
      {/* Nav items */}
      <nav className="flex flex-col justify-between items-center border border-zinc-500 p-5 grow rounded-3xl gap-3 w-full mb-8">
        {navItems.map((item) => (
          <Link key={item.to} to={item.to} className="w-full">
            {({ isActive }) => (
              <div
                className={`flex items-center gap-3  rounded-full border-y border-r transition-all ${
                  isActive
                    ? "bg-cyan-900/50 border-cyan-500"
                    : "bg-zinc-700/20 border-zinc-500"
                }`}
              >
                {/* Icon circle */}
                <div
                  className={`w-12 h-12 min-w-12 rounded-full bg-zinc-900 flex items-center justify-center border ${
                    isActive ? "border-cyan-500" : "border-zinc-500"
                  }`}
                >
                  <item.icon
                    size={20}
                    className={isActive ? "text-cyan-500" : "text-zinc-400"}
                  />
                </div>

                {/* Label */}
                <span
                  className={`text-sm font-medium ${
                    isActive ? "text-zinc-100" : "text-zinc-400"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            )}
          </Link>
        ))}
        <div className="w-full ">
          <button className="flex items-center gap-3 rounded-full border-y border-r border-zinc-500 bg-zinc-700/20 w-full hover:border-red-500 hover:text-red-400 transition-all cursor-pointer">
            <div className="w-12 h-12 min-w-12 rounded-full bg-zinc-900 border border-zinc-500 flex items-center justify-center cursor-pointer">
              <LogOut size={20} className="text-zinc-400 cursor-pointer" />
            </div>
            <span className="text-sm font-medium text-zinc-400 cursor-pointer">
              Logout
            </span>
          </button>
        </div>
      </nav>
      {/* Logout */}
    </div>
  );
}
