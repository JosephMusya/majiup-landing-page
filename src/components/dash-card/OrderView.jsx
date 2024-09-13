import React from "react";
import DashCard from "./DashCard";
import "./order-view.css";
import { BiSolidShare } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoAlertSharp } from "react-icons/io5";
import { MdWaterDrop } from "react-icons/md";
import Status from "../status/Status";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export default function OrderView({ onClick }) {
  const iSize = 28;

  return (
    <div onClick={onClick} className="header-section">
      <div className="refill-content">
        <Status status="In Progress" />
        <div className="heading">
          <h1>Owner Me</h1>
          <small>2 Days ago</small>
        </div>
        {/* <div>
          <h2>{refill.tank_name}</h2>
        </div> */}
        <div className="loc-card">
          <MdLocationOn color="red" size={30} />
          <h2>Kilimani</h2>
        </div>
        <section className="cards">
          <DashCard
            description="Liters Requested"
            number={4000}
            unit=" Ltrs"
            icon={<MdWaterDrop size={iSize} color="#fff" />}
          />
          <DashCard
            description="Total Water Cost"
            number={3800}
            unit="Ksh"
            icon={<RiMoneyDollarCircleLine size={iSize} color="#fff" />}
          />
        </section>
        <div>
          <div>
            <p className="to-vendor">
              Allocated to
              <span style={{ cursor: "pointer" }} className="v-card">
                Prius Jon
              </span>
            </p>
          </div>
        </div>
        <div className="actions">
          <button>
            {/* <span>
              <BiSolidShare size={iSize} />
            </span> */}
            Share Details
          </button>
          <button>
            {/* <span>
              <IoAlertSharp size={iSize} />
            </span> */}
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
