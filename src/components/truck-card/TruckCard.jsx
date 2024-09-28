import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { PiArrowsCounterClockwise } from "react-icons/pi";
import { SiBookmeter } from "react-icons/si";
import { LuClock3 } from "react-icons/lu";
import { LiaIdCardSolid } from "react-icons/lia";
import { timeAgo } from "../../utils/helpers/timeAgo";
import CustomPopup from "../popup/Popup";
import EditTruck from "../../pages/add-truck/EditTruck";

export default function TruckCard({ truck, removeTruck, updateTruck }) {
  return (
    <div className="vendor-details" popovertarget="truck-details">
      <div className="flex-column" style={{ padding: "0.8rem", gap: "0.5rem" }}>
        <article>
          <div className="header">
            <IoPersonOutline className="disp-icon" />

            <span>Truck Driver</span>
          </div>

          <span>{truck.driver_name}</span>
        </article>
        <article>
          <div className="header">
            <PiArrowsCounterClockwise className="disp-icon" />
            <span>Orders Delivered</span>
          </div>

          <span>{2}</span>
        </article>
        <article>
          <div className="header">
            <SiBookmeter className="disp-icon" />
            <span>Truck Capacity</span>
          </div>
          <span>{truck.truck_capacity.toLocaleString()} Ltrs </span>
        </article>
        <article>
          <div className="header">
            <LuClock3 className="disp-icon" />
            <span>Registered</span>
          </div>
          <span>{timeAgo(truck.registered_on)} ago</span>
        </article>
        <article>
          <div className="header">
            <LiaIdCardSolid size={20} className="disp-icon" />
            <span>Vehicle Plate No. </span>
          </div>
          <span>{truck.vehicle_number}</span>
        </article>
      </div>
      {/* <hr color="#f4f4f4" style={{ minWidth: "100%" }} /> */}
      <div
        style={{
          justifyContent: "space-around",
          // backgroundColor: "#f4f4f4",
          padding: "0.8rem",
        }}
        className="flex-row"
      >
        <CustomPopup
          trigger={
            <button style={{ backgroundColor: "red", minWidth: "40%" }}>
              REMOVE
            </button>
          }
          title={`Remove ${truck?.name}`}
          body="This action will remove this water truck from your listing!"
          onConfirm={removeTruck}
          confirmText="Remove"
          confirmStyle={{ backgroundColor: "red" }}
          cancelText="back"
        />
        <CustomPopup
          trigger={<button style={{ minWidth: "40%" }}>EDIT</button>}
          showActionButtons={false}
          closeOnDocumentClick={false}
        >
          <EditTruck truck={truck} updateTruck={updateTruck} />
        </CustomPopup>
        <CustomPopup

        // children={<EditTruck truck={truck} />}
        />
      </div>
    </div>
  );
}
