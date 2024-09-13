import React from "react";
import OrderCard from "../../components/order-card/OrderCard";
import { useNavigate } from "react-router-dom";

export default function InProgress() {
  document.title = "Orders in progress";
  const navigate = useNavigate();

  return (
    <>
      <h1 className="orders-heading">Active Orders</h1>
      <div className="orders">
        <OrderCard onClick={() => navigate("../order/9")} />
        <OrderCard onClick={() => navigate("../order/9")} />
        <OrderCard onClick={() => navigate("../order/9")} />
      </div>
    </>
  );
}
