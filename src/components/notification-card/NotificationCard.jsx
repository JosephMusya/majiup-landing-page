import React from "react";
import { MdOutlineNotifications } from "react-icons/md";
import "./notifications.css";

export default function NotificationCard({ active }) {
  return (
    <div
      className="flex-row notification-card"
      style={{ gap: "1rem", backgroundColor: active ? "#0072bb" : "#fff" }}
    >
      <div>
        <MdOutlineNotifications
          size={28}
          className="disp-icon"
          color={active ? "#fff" : "#0072bb"}
        />
      </div>
      <div
        className="flex-column"
        style={{
          position: "relative",
          width: "100%",
          gap: "0.2rem",
          color: active && "#fff",
        }}
      >
        <article style={{ fontWeight: "bold" }}>Notification Title</article>
        <article style={{}}>Notification Message to be listed here</article>
        <small
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            alignSelf: "flex-end",
            fontSize: "small",
          }}
        >
          2 hrs ago
        </small>
      </div>
    </div>
  );
}
