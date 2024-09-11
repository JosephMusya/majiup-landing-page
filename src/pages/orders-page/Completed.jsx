import React from "react";
import OrderCard from "../../components/order-card/OrderCard";
import { title } from "../../utils/app/variable";

export default function Completed() {
  document.title = "Completed Orders";
  return (
    <>
      <h1 className="orders-heading">Completed Orders</h1>
      <div className="orders">
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </>
  );
}
