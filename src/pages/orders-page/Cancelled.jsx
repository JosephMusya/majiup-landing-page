import React from "react";
import OrderCard from "../../components/order-card/OrderCard";

export default function Cancelled() {
  document.title = "Cancelled Orders";

  return (
    <>
      <h1 className="orders-heading">Cancelled Orders</h1>
      <div className="orders">
        <OrderCard />
        <OrderCard />
      </div>
    </>
  );
}
