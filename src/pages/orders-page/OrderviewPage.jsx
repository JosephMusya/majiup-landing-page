import React from "react";
import DashCard from "../../components/dash-card/DashCard";
import { BiSolidShare } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoAlertSharp } from "react-icons/io5";
import { MdWaterDrop } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import Status from "../../components/status/Status";
import { useParams } from "react-router-dom";
import { FaRegCommentDots } from "react-icons/fa6";

export default function OrderViewPage() {
  const iSize = 28;
  const { id } = useParams();

  return (
    <div className="header-section" style={{ paddingTop: "1rem" }}>
      <div
        className="refill-content"
        style={{ boxShadow: "none", border: "none" }}
      >
        <Status status="In Progress" top={"0%"} right={"0%"} />
        <div className="heading">
          <h1>Samtig Wong</h1>
          <small>2 Days ago</small>
        </div>
        <div className="flex-row">
          <FaRegClock size={iSize} color="#0072bb" />
          <h2>Delivery in {1} hour</h2>
        </div>
        <div className="loc-card">
          <MdLocationOn color="red" size={30} />
          <h2>Kilimani</h2>
        </div>
        <section className="cards">
          <DashCard
            description="Liters Requested"
            number={`${4000} `}
            unit="Ltrs"
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
        <div
          style={{
            display: "flex",
            gap: "2px !important",
            flexDirection: "column",
          }}
        >
          <div>
            <FaRegCommentDots size={30} color="#0072bb" />
          </div>
          <article>Comments here</article>
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
