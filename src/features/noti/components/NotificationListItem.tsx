import React from 'react';
import { Check, X } from 'lucide-react'; // Optional: using lucide-react for sharper icons

interface NotificationListItemProps {
  projectTitle: string;
  requesterName: string;
  avatarUrl: string;
  onAccept: () => void;
  onReject: () => void;
}

const NotificationListItem: React.FC<NotificationListItemProps> = ({
  projectTitle,
  requesterName,
  avatarUrl,
  onAccept,
  onReject,
}) => {
  return (
    <div className="max-w-full flex items-center gap-4 bg-transparent border-b border-zinc-200 p-2.5 sm:p-3 transition">
      {/* Avatar Section */}
      <div className="relative flex-shrink-0">
        <img
          src={avatarUrl}
          alt={requesterName}
          className="w-16 h-16 rounded-full object-cover ring-2 ring-white/5"
        />
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-[#2D2D2D]" />
      </div>

      {/* Content Section */}
      <div className="flex-1 min-w-0">
        <h3 className="text-white font-bold text-lg truncate leading-tight">
          {projectTitle}
        </h3>
        <p className="text-gray-400 text-sm mt-1 leading-snug">
          <span className="text-white font-medium">{requesterName}</span> has been requested to join your project. Do you want to Accept or reject?
        </p>

        {/* Action Buttons */}
        <div className="max-w-80 md:flex gap-3 mt-4">
          <button
            onClick={onAccept}
            className="flex-1 flex items-center justify-center gap-4 bg-[#2E7D32] hover:bg-[#388E3C] text-white py-2 px-4 rounded-4xl font-semibold text-sm transition-colors active:scale-95 cursor-pointer"
          >
            <Check size={24} strokeWidth={5} />
            Accept
          </button>
          
          <button
            onClick={onReject}
            className="text-white flex-1 flex items-center justify-center gap-4 bg-[#861c1c] hover:bg-[#952121] py-2 px-4 rounded-4xl font-semibold text-sm transition-colors active:scale-95 cursor-pointer"
          >
            <X size={24} strokeWidth={5} />
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationListItem;