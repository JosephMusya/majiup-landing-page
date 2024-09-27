import React from "react";
import "./ordercard.css";
import { timeAgo } from "../../utils/helpers/timeAgo";

export default function OrderCard({ onClick, order }) {
  return (
    <div onClick={onClick} className="order-card" style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <article style={{ fontWeight: "bold" }}>
          Delivery to {order?.town}
        </article>
        <article>{order.status}</article>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <article>{order?.amount_liters} Liters</article>
        {order?.water_type && <article>{order?.water_type} water</article>}
        <article>{timeAgo(order.created_at)} ago</article>
      </div>
    </div>
  );
}
