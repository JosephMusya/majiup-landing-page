import React from "react";
import "./sidenav.css";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineNotifications, MdOutlineDashboard } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";
import { LuClock3 } from "react-icons/lu";
import { MdDoneAll } from "react-icons/md";
import { HashRouter } from "react-router-dom";

export default function SideNav() {
  const iconSize = 24;
  return (
    <div
      className="side-nav"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "relative",
      }}
    >
      <div className="link-div">
        <div>
          <MdOutlineDashboard size={iconSize} color="#fff" />
        </div>
        <Link to="" className="link">
          DASHBOARD
        </Link>
      </div>
      <div className="link-div">
        <div>
          <LuClock3 size={iconSize} color="#fff" />
        </div>
        <Link to="in-progress" className="link">
          IN PROGRESS
        </Link>
      </div>
      <div className="link-div">
        <div>
          <MdDoneAll size={iconSize} color="#fff" />
        </div>
        <Link to="completed" className="link">
          COMPLETED
        </Link>
      </div>
      <div className="link-div">
        <div>
          <ImCancelCircle size={iconSize} color="#fff" />
        </div>
        <Link to="cancelled" className="link">
          CANCELLED
        </Link>
      </div>
      <div className="link-div">
        <div>
          <MdOutlineNotifications size={iconSize} color="#fff" />
        </div>
        <Link to="notifications" className="link">
          NOTIFICATIONS
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          position: "absolute",
          bottom: "5%",
        }}
      >
        <div>
          <IoPersonOutline size={40} />
        </div>
        <div>
          <h2 style={{ fontWeight: "bold" }}>Josee Mie</h2>
          <Link to="/" className="link">
            LOGOUT
          </Link>
        </div>
      </div>
    </div>
  );
}
