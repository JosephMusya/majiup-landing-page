import React from "react";
import "./dashboard.css";
import SideNav from "../../components/side-nav/SideNav";
import OrdersPage from "../orders-page/Cancelled";
import { Routes, Route } from "react-router-dom";
import MainViewPage from "../main-view-page/MainViewPage";
import Cancelled from "../orders-page/Cancelled";
import InProgress from "../orders-page/InProgress";
import Completed from "../orders-page/Completed";
import Notifications from "../notifications/Notifications";

export default function Dashboard() {
  const logedIn = true;
  document.title = "Majiup Dashboard";

  return logedIn ? (
    <div className="dashboard">
      <div
        style={{
          height: "85dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "22dvw",
          position: "sticky",
          top: "9%",
          left: 0,
        }}
      >
        <SideNav />
      </div>
      <div className="routes" style={{ width: "inherit", padding: "8px" }}>
        <Routes>
          <Route path="/" element={<MainViewPage />} />
          <Route path="/in-progress" element={<InProgress />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/cancelled" element={<Cancelled />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* Other nested routes */}
        </Routes>
      </div>
    </div>
  ) : (
    <Login />
  );
}
