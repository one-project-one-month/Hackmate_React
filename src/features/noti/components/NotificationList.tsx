import NotificationTab from "./NotificationTab";
import NotificationListItem from "./NotificationListItem";
import { mockNotifications } from "@/features/projects/mock";
import { MailOpen } from "lucide-react";

const NotificationList = () => {
  const handleAccept = (id: string) => console.log(`Accepted: ${id}`);
  const handleReject = (id: string) => console.log(`Rejected: ${id}`);
  return (
    <div className="flex flex-col gap-4 w-full h-full items-center bg-white/10 backdrop-blur-lg rounded-2xl relative">
      <div className="w-full p-3">
        <NotificationTab />
      </div>

      <div className="flex flex-col gap-3 w-full h-115 p-7 overflow-y-auto custom-scrollbar">
        {mockNotifications.length > 0 ? (
          mockNotifications.map((noti) => (
            <NotificationListItem
              key={noti.id}
              projectTitle={noti.projectTitle}
              requesterName={noti.requesterName}
              avatarUrl={noti.avatarUrl}
              onAccept={() => handleAccept(noti.id)}
              onReject={() => handleReject(noti.id)}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-white/40">
            <p className="text-sm italic">No new notifications</p>
          </div>
        )}
      </div>

      <div className="flex items-center gap-6 bg-slate-600/20   backdrop-blur-md p-4 text-cyan-400 text-sm rounded-3xl absolute right-3 bottom-3 cursor-pointer hover:bg-white/10">
        <MailOpen/>
        <p>Mark as all read</p>
      </div>
    </div>
  );
};

export default NotificationList;
