import React from "react";

const SwipeHint: React.FC = () => {
  const hints = [
    { key: "Left Arrow", action: "Skip" },
    { key: "Right Arrow", action: "Request to Join" },
    { key: "Down Arrow", action: "Detail" },
    { key: "Up Arrow", action: "Share" },
  ];

  return (
    <div className="w-full flex flex-wrap justify-start items-center gap-x-6 gap-y-2 py-4">
      {hints.map((hint, index) => (
        <div key={index} className="flex items-center text-[13px] md:text-sm text-zinc-500 font-medium">
          {/* Subtle Bullet Point */}
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 mr-2" />
          
          <span className="flex items-center">
            {hint.key}
            <span className="mx-2 text-zinc-600">→</span>
            <span className="text-zinc-400">{hint.action}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default SwipeHint;