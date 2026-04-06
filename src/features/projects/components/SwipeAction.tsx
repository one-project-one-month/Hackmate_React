import React from "react";
import { X, Share2, ExternalLink, Check } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/useAppHook";
import { applyProject, skipProject } from "../slice";
import { likeProject, dislikeProject, applyToProject } from "../api/api";

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
  const dispatch = useAppDispatch();
  const { feedProjects, currentIndex } = useAppSelector((state) => state.projects);
  const currentProject = feedProjects[currentIndex];

  const handleSkip = async () => {
    if (!currentProject) return;
    try {
      await dislikeProject(currentProject.id);
    } catch (err) {
      console.error("Dislike metric failed:", err);
    }
    dispatch(skipProject());
  };

  const handleApply = async () => {
    if (!currentProject) return;
    try {
      // Fire both: metric like + join request
      await Promise.all([
        likeProject(currentProject.id),
        applyToProject(currentProject.id),
      ]);
    } catch (err) {
      console.error("Apply failed:", err);
    }
    dispatch(applyProject());
  };

  const handleShare = () => {
    if (!currentProject) return;
    if (navigator.share) {
      navigator.share({
        title: currentProject.title,
        text: currentProject.description,
        url: currentProject.github_repo || window.location.href,
      });
    }
  };

  const handleView = () => {
    if (!currentProject?.github_repo) return;
    window.open(currentProject.github_repo, "_blank");
  };

  const isDisabled = !currentProject;

  const actions = [
    {
      icon: X,
      bgColor: isDisabled ? "bg-gray-600 opacity-50" : "bg-[#df3232]",
      ariaLabel: "Skip this project",
      onClick: handleSkip,
    },
    {
      icon: Share2,
      bgColor: isDisabled ? "bg-gray-600 opacity-50" : "bg-[#0e7490]",
      ariaLabel: "Share project",
      onClick: handleShare,
    },
    {
      icon: ExternalLink,
      bgColor: isDisabled ? "bg-gray-600 opacity-50" : "bg-[#1499c8]",
      ariaLabel: "View project details",
      onClick: handleView,
    },
    {
      icon: Check,
      bgColor: isDisabled ? "bg-gray-600 opacity-50" : "bg-[#166534]",
      ariaLabel: "Apply to project",
      onClick: handleApply,
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