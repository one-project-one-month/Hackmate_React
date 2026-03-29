import React from "react";
import NotificationList from "../components/NotificationList";

export default function notification() {
  return (
    <div className="min-h-screen py-5 px-15 flex flex-col justify-start items-start">
      <div className="">
        <h1 className="text-5xl font-bold font-serif text-zinc-200 leading-relaxed">
          Notification
        </h1>
        <p className="text-zinc-400 mb-8">
          The system grow with your needs. Whether
        </p>
      </div>

      <NotificationList />
    </div>
  );
}
