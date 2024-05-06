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
          <div>
            <p>Request for a water refill</p>
          </div>
        </div>
        <div>
          <div className="step">
            <IoIosWater size={iconSize} />
          </div>
          <p>Set the quantity you need</p>
        </div>
        <div>
          <div className="step">
            <FaTruckDroplet size={iconSize} />
          </div>
          <p>Water is delivered</p>
        </div>
      </div>
    </div>
  );
}
