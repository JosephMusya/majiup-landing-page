import React from "react";
import OrderCard from "../../components/order-card/OrderCard";
import { title } from "../../utils/app/variable";
import { useNavigate } from "react-router-dom";

export default function Completed() {
  document.title = "Completed Orders";
  const navigate = useNavigate();

  return (
    <>
      <h1 className="orders-heading">Completed Orders</h1>
      <div className="orders">
        <OrderCard onClick={() => navigate("../order/9")} />
        <OrderCard onClick={() => navigate("../order/9")} />
        <OrderCard onClick={() => navigate("../order/9")} />
        <OrderCard onClick={() => navigate("../order/9")} />
        <OrderCard onClick={() => navigate("../order/9")} />
        <OrderCard onClick={() => navigate("../order/9")} />
        <OrderCard onClick={() => navigate("../order/9")} />
      </div>
    </>
  );
}
