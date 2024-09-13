import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { SiBookmeter } from "react-icons/si";
import { FaTruckDroplet } from "react-icons/fa6";
import { LiaIdCardSolid } from "react-icons/lia";
export default function TruckCard() {
  return (
    <div className="vendor-details" popovertarget="truck-details">
      <article>
        <div className="header">
          <IoPersonOutline className="disp-icon" />

          <span>Truck Driver</span>
        </div>

        <span>Nickson Wekesa</span>
      </article>
      <article>
        <div className="header">
          <PiArrowsCounterClockwise className="disp-icon" />
          <span>Orders completed</span>
        </div>

        <span>{2}</span>
      </article>

      <article>
        <div className="header">
          <SiBookmeter className="disp-icon" />
          <span>Truck Capacity</span>
        </div>
        <span>10,000 Ltrs </span>
      </article>
      {/* <article>
          <span>Registered</span>
          <span>{timeAgo(vendor?.registered_on)}</span>
        </article> */}
      <article>
        <div className="header">
          <LiaIdCardSolid size={20} className="disp-icon" />
          <span>Vehicle Plate No. </span>
        </div>
        <span>KAQ 679E</span>
      </article>
    </div>
  );
}
