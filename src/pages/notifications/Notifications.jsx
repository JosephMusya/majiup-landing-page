import React from "react";
import NotificationCard from "../../components/notification-card/NotificationCard";

export default function Notifications() {
  document.title = "Notifications";

  return (
    <div>
      <h1 className="orders-heading">Notifications</h1>
      <div className=" flex-column notifications" style={{ maxWidth: "724px" }}>
        <NotificationCard />
        <NotificationCard active={true} />
        <NotificationCard />
        <NotificationCard />
      </div>
    </div>
  );
}
