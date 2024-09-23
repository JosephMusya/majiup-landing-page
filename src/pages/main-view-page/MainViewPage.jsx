import React from "react";
import { FaTruckDroplet } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { FaHandHoldingWater } from "react-icons/fa";
import DashCard from "../../components/dash-card/DashCard";
import OrderView from "../../components/dash-card/OrderView";
import FloatingButton from "../../components/floating-button/FloatingButton";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserContext } from "../../providers/UserProvider";

export default function MainViewPage() {
  const { profile, loadingUser } = useUserContext();
  const iconSize = 40;
  const navigate = useNavigate();

  document.title = "Dashboard";
  console.log(profile);

  return loadingUser ? (
    <p>Loading user</p>
  ) : profile && !loadingUser ? (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {profile?.user_type === "client" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h1 className="orders-heading">Create water refill order </h1>
          <div>
            <Link to="../create-order" className="link">
              <button>Order Water</button>
            </Link>
          </div>
        </div>
      )}
      <div className="dashboard-cards">
        <DashCard
          number={3}
          description="Requests in progress"
          icon={<FaTruckDroplet size={iconSize} color="#fff" />}
          onClick={() => navigate("in-progress")}
        />
        <DashCard
          number={6}
          description="Completed requests"
          icon={<IoMdCheckmark size={iconSize} color="#fff" />}
          onClick={() => navigate("completed")}
        />
        <DashCard
          number={340588}
          unit="Ltrs"
          description={`Liters ${
            profile.user_type === "client"
              ? "Ordered"
              : profile.user_type === "trucker" && "Delivered"
          }`}
          icon={<FaHandHoldingWater size={iconSize} color="#fff" />}
        />
      </div>
      <h1>Recent Orders</h1>
      <OrderView onClick={() => navigate("order/9")} />
      {profile.user_type === "client" && (
        <FloatingButton to="../create-order" title="Create order" />
      )}
    </div>
  ) : (
    <p>Error loading profile</p>
  );
}
