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
import { timeAgo } from "../../utils/helpers/timeAgo";

export default function OrderView({ onClick, order, profile }) {
  const iSize = 28;

  return (
    <div onClick={onClick} className="header-section">
      <div className="refill-content">
        <Status status="In Progress" />
        <div className="heading">
          {profile.user_type === "client" ? (
            <h2>{order.owner.name}</h2>
          ) : (
            <h2>Delivery to {order.owner.name}</h2>
          )}
          <small>{timeAgo(order.created_at)}</small>
        </div>
        <div className="loc-card">
          <MdLocationOn color="red" size={30} />
          <h2>{order.town}</h2>
        </div>
        <section className="cards">
          <DashCard
            description="Liters Requested"
            number={order.amount_liters}
            unit=" Ltrs"
            icon={<MdWaterDrop size={iSize} color="#fff" />}
          />
          <DashCard
            description="Total Water Cost"
            number={order.amount_ksh ?? 3800}
            unit="Ksh"
            icon={<RiMoneyDollarCircleLine size={iSize} color="#fff" />}
          />
        </section>
        {profile.user_type === "client" && (
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
        )}
      </div>
    </div>
  );
}
