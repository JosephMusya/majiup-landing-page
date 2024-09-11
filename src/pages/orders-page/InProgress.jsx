import React from "react";
import OrderCard from "../../components/order-card/OrderCard";

export default function InProgress() {
  document.title = "Orders in progress";

  return (
    <>
      <h1 className="orders-heading">Active Orders</h1>
      <div className="orders">
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </>
  );
}
