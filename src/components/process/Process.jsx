import React from "react";
import { ImMobile2 } from "react-icons/im";
import { IoIosWater } from "react-icons/io";
import { FaTruckDroplet } from "react-icons/fa6";
import "./process.css";

export default function Process() {
  const iconSize = 30;
  return (
    <div className="process">
      <h1>How Majiup works</h1>
      <div>
        <div>
          <div className="step">
            <ImMobile2 size={iconSize} />
          </div>
          <h2>Request for a water refill</h2>
        </div>
        <div>
          <div className="step">
            <IoIosWater size={iconSize} />
          </div>
          <h2>Set the quantity you need</h2>
        </div>
        <div>
          <div className="step">
            <FaTruckDroplet size={iconSize} />
          </div>
          <h2>Water is delivered</h2>
        </div>
      </div>
    </div>
  );
}
