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
import { useOrderContext } from "../../providers/OrderProvider";
import supabase from "../../config/supabaseConfig";
import { useEffect } from "react";
import { useState } from "react";

export default function MainViewPage() {
  const { profile, loadingUser } = useUserContext();
  const { ordersCount, loadingOrders } = useOrderContext();
  const [loadingLastOrder, setLoadingLastOrder] = useState(true);
  const [prevOrder, setPreviousOrder] = useState();

  const iconSize = 40;
  const navigate = useNavigate();

  document.title = "Dashboard";

  const getLastOrder = async () => {
    try {
      let query = supabase
        .from("refills")
        .select(
          `*, 
        owner(phone, name, email),
        truck(*)
        `
        )
        .order("created_at", {
          ascending: false,
        });

      if (profile?.user_type === "client") {
        query = query.eq("owner", profile?.id);
      } else if (profile?.user_type === "trucker") {
        query = query.eq("truck.owner", profile?.id);
      }

      setLoadingLastOrder(true);
      const { data, error } = await query.limit(1).single();

      if (data) {
        setPreviousOrder(data);
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoadingLastOrder(false);
    }
  };

  useEffect(() => {
    profile && getLastOrder();
  }, [profile]);

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
          number={loadingOrders ? "---" : ordersCount.inProgress}
          description={`Order${
            ordersCount.inProgress > 1 ? "s" : ""
          } in progress`}
          icon={<FaTruckDroplet size={iconSize} color="#fff" />}
          onClick={() => navigate("in-progress")}
        />
        <DashCard
          number={loadingOrders ? "---" : ordersCount.completed}
          description="Completed orders"
          icon={<IoMdCheckmark size={iconSize} color="#fff" />}
          onClick={() => navigate("completed")}
        />
        <DashCard
          number={loadingOrders ? "---" : ordersCount.totalLiters}
          unit="Ltrs"
          description={`Liters ${
            profile.user_type === "client"
              ? "Ordered"
              : profile.user_type === "trucker" && "Delivered"
          }`}
          icon={<FaHandHoldingWater size={iconSize} color="#fff" />}
        />
      </div>
      <div className="flex-column">
        <h2>Recent Orders</h2>
        {loadingLastOrder ? (
          <p>Loading previous order</p>
        ) : prevOrder ? (
          <OrderView
            onClick={() => navigate(`order/${prevOrder.id}`)}
            order={prevOrder}
            profile={profile}
          />
        ) : (
          <p>No orders found</p>
        )}
      </div>
      {profile.user_type === "client" && (
        <FloatingButton to="../create-order" title="Create order" />
      )}
    </div>
  ) : (
    <p>Error loading profile</p>
  );
}
