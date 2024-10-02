import React from "react";
import "./dashboard.css";
// import SideNav from "../../components/side-nav/SideNav";
import OrdersPage from "../orders-page/Cancelled";
import { Routes, Route } from "react-router-dom";
import MainViewPage from "../main-view-page/MainViewPage";
import Cancelled from "../orders-page/Cancelled";
import InProgress from "../orders-page/InProgress";
import Completed from "../orders-page/Completed";
import Notifications from "../notifications/Notifications";
import OrderViewPage from "../orders-page/OrderviewPage";
import Profile from "../profile/Profile";
import Trucks from "../trucks/Trucks";
import AddTrucks from "../add-truck/AddTrucks";
import Login from "../login/Login";
import CreateOrder from "../create-order/CreateOrder";
import { useUserContext } from "../../providers/UserProvider";
import EditTruck from "../add-truck/EditTruck";

export default function Dashboard() {
  const { authUser, loadingUser, profile } = useUserContext();
  document.title = "Majiup Dashboard";

  return authUser || loadingUser ? (
    <div className="dashboard">
      <div
        style={{
          height: "85dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "22dvw",
          position: "sticky",
          top: "10%",
          left: 0,
        }}
      >
        {/* <SideNav /> */}
      </div>
      <div className="routes" style={{ width: "inherit", padding: "8px" }}>
        <Routes>
          <Route path="/" element={<MainViewPage />} />
          <Route path="/in-progress" element={<InProgress />} />
          <Route path="/completed" element={<Completed />} />
          <Route path="/cancelled" element={<Cancelled />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/order/:id" element={<OrderViewPage />} />
          <Route path="/profile/:id" element={<Profile />} />
          {profile?.user_type === "trucker" && (
            <>
              <Route path="/trucks" element={<Trucks />} />
              <Route path="/add-truck" element={<AddTrucks />} />
              {/* <Route path="/edit-truck/:id" element={<EditTruck />} /> */}
            </>
          )}
          {profile?.user_type === "client" && (
            <Route path="/create-order" element={<CreateOrder />} />
          )}
        </Routes>
      </div>
    </div>
  ) : (
    <Login />
  );
}
