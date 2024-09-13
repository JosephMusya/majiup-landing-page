import React from "react";
import "./ordercard.css";

export default function OrderCard({
  onClick,
  name,
  status,
  quantity,
  price,
  time,
}) {
  return (
    <div onClick={onClick} className="order-card" style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <article>Joseph Musya</article>
        <article>Status</article>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <article>3000 Liters</article>
        <article>Ksh 3500</article>
        <article>3 Days ago</article>
      </div>
    </div>
  );
}
