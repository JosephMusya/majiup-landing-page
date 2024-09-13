import React from "react";
import "./trucks.css";

import TruckCard from "../../components/truck-card/TruckCard";
import FloatingButton from "../../components/floating-button/FloatingButton";

export default function Trucks() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h1 className="orders-heading">My Water Trucks</h1>
      <div id="truck-details" popover>
        POP OVER
      </div>
      <div className="trucks">
        <TruckCard />
        <TruckCard />
        <TruckCard />
        <TruckCard />
        <TruckCard />
        <TruckCard />
      </div>
      <FloatingButton to="../add-truck" title="Add Trucks" />
    </div>
  );
}
