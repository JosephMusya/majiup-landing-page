import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { SiBookmeter } from "react-icons/si";
import { LuClock3 } from "react-icons/lu";
import { LiaIdCardSolid } from "react-icons/lia";
import { timeAgo } from "../../utils/helpers/timeAgo";
import { FaPhoneAlt } from "react-icons/fa";

export default function DriverCard({ truck }) {
  const titleStyle = {
    // fontWeight: "bold",
  };
  return (
    <div className="vendor-details" popovertarget="truck-details">
      <div className="flex-column" style={{ padding: "0.8rem", gap: "0.8rem" }}>
        <article>
          <div className="header">
            <IoPersonOutline className="disp-icon" />
            <span style={titleStyle}>Truck Driver</span>
          </div>
          <span>{truck.driver_name}</span>
        </article>
        <article>
          <div className="header">
            <FaPhoneAlt size={20} className="disp-icon" />
            <span style={titleStyle}>Driver Phone </span>
          </div>
          <span>+{truck.owner.phone}</span>
        </article>
        <article>
          <div className="header">
            <SiBookmeter className="disp-icon" />
            <span style={titleStyle}>Truck Capacity</span>
          </div>
          <span>{truck.truck_capacity.toLocaleString()} Ltrs </span>
        </article>

        <article>
          <div className="header">
            <LiaIdCardSolid size={20} className="disp-icon" />
            <span style={titleStyle}>Vehicle Plate No. </span>
          </div>
          <span>{truck.vehicle_number}</span>
        </article>
      </div>
    </div>
  );
}
