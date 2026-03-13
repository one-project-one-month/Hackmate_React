import React from "react";
import { X, Share2, ExternalLink, Check } from "lucide-react";

interface ActionButtonProps {
  icon: React.ElementType;
  bgColor: string;
  onClick: () => void;
  ariaLabel: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  bgColor,
  onClick,
  ariaLabel,
}) => {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`cursor-pointer w-14 h-14 flex items-center justify-center rounded-full
      transition-all duration-200 hover:scale-105 active:scale-95
      shadow-lg focus:outline-none focus:ring-2 focus:ring-white/40 ${bgColor}`}
    >
      <Icon className="w-7 h-7 text-white stroke-[2.5]" />
    </button>
  );
};

const SwipeAction: React.FC = () => {
  const handleSkip = () => console.log("Action: Skip");
  const handleShare = () => console.log("Action: Share");
  const handleView = () => console.log("Action: View");
  const handleAccept = () => console.log("Action: Apply");

  const actions = [
    {
      icon: X,
      bgColor: "bg-[#df3232]",
      ariaLabel: "Skip this project",
      onClick: handleSkip,
    },
    {
      icon: Share2,
      bgColor: "bg-[#0e7490]",
      ariaLabel: "Share project",
      onClick: handleShare,
    },
    {
      icon: ExternalLink,
      bgColor: "bg-[#1499c8]",
      ariaLabel: "View project details",
      onClick: handleView,
    },
    {
      icon: Check,
      bgColor: "bg-[#166534]",
      ariaLabel: "Accept project",
      onClick: handleAccept,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center gap-6 py-10">
      {actions.map((action, index) => (
        <ActionButton
          key={index}
          icon={action.icon}
          bgColor={action.bgColor}
          onClick={action.onClick}
          ariaLabel={action.ariaLabel}
        />
      ))}
    </div>
  );
};

export default SwipeAction;