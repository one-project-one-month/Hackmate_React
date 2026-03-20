import React from "react";

interface TechStackBadgeProps {
  name: string;
}

const TechStackBadge: React.FC<TechStackBadgeProps> = ({ name }) => {
  return (
    <span className="px-3 py-1 lg:px-4 lg:py-1.5 bg-cyan-600 text-white border border-cyan-700/50 rounded-lg text-[10px] md:text-xs lg:text-sm font-medium transition-all duration-200 hover:bg-cyan-600/80 hover:border-cyan-500/50 cursor-default">
      {name}
    </span>
  );
};

export default TechStackBadge;