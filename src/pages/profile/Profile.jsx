import React from "react";
import DashCard from "../../components/dash-card/DashCard";
import { FaTruckDroplet } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import { useUserContext } from "../../providers/UserProvider";
import { timeAgo } from "../../utils/helpers/timeAgo";
import { useOrderContext } from "../../providers/OrderProvider";
import { MdModeEdit } from "react-icons/md";

export default function Profile() {
  const { authUser, profile, loadingUser } = useUserContext();
  const { ordersCount, loadingOrders } = useOrderContext();

  const profileElementStyle = {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "600px",
    padding: "0.25rem 0",
  };

  const profileTitle = {
    fontWeight: "bold",
  };

  const iconSize = 40;

  // console.log();

  return loadingUser ? (
    <p>Loading...</p>
  ) : profile && !loadingUser ? (
    <div style={{ maxWidth: "920px" }}>
      <div className="flex-row" style={{ justifyContent: "space-between" }}>
        <div className="flex-column" style={{ gap: "0.5rem" }}>
          <div
            className="flex-row"
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontWeight: "bold",
                width: "100%",
                lineHeight: 1,
              }}
            >
              {profile?.name}
            </h1>
            <span
              style={{
                alignSelf: "flex-start",
              }}
            >
              <MdVerified size={24} color="#0072bb" />
            </span>
          </div>

          <article>{timeAgo(profile?.created_at)} on Majiup</article>
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            width: "50%",
            justifyContent: "flex-end",
          }}
        >
          <button
            className="flex-row"
            style={{
              backgroundColor: "#F4F4F4",
              color: "#000",
              borderRadius: "2rem",
              padding: "0.8rem 1rem",
              alignItems: "center",
            }}
          >
            <span>
              <MdModeEdit size={22} />
            </span>
            Update Profile
          </button>
        </div>
      </div>
      <div className="dashboard-cards" style={{ paddingTop: "2rem" }}>
        <DashCard
          number={loadingOrders ? "---" : ordersCount.total}
          description={`Order${ordersCount.total > 1 ? "s" : ""} ${
            profile.user_type === "client" ? "Placed" : "Delivered"
          }`}
          icon={<FaTruckDroplet size={iconSize} color="#fff" />}
        />
        <DashCard
          number={loadingOrders ? "---" : ordersCount.totalLiters}
          unit="Ltrs"
          description={`Liters  ${
            profile.user_type === "client" ? "Ordered" : "Supplied"
          }`}
          icon={<FaHandHoldingWater size={iconSize} color="#fff" />}
        />
      </div>
      {!authUser.user_metadata.phone_verified && (
        <div
          style={{
            // display: "flex",
            alignSelf: "flex-start",
            width: "50%",
            marginTop: "2rem",
          }}
        >
          <p style={{ color: "#333333" }}>
            We need to verify your phone number
          </p>
          <button
            style={{
              backgroundColor: "#f6f6f6",
              backgroundColor: " #0072bb",
              color: "#fff",
              borderRadius: "2rem",
              padding: "0.8rem 1rem",
            }}
          >
            Verify Now
          </button>
        </div>
      )}
      <div style={{ paddingTop: "2rem" }}>
        <section
          style={{
            borderBottom: "solid 2px #f4f4f4",
            margin: "0.5rem 0",
            maxWidth: "700px",
          }}
        >
          <h2 style={{ fontWeight: "" }}>Details</h2>
        </section>

        <div style={profileElementStyle}>
          <article style={profileTitle}>Name</article>
          <article>{profile?.name}</article>
        </div>
        {profile.user_type === "trucker" && (
          <div style={profileElementStyle}>
            <article style={profileTitle}>Area of Operartion</article>
            <article>{profile?.town}</article>
          </div>
        )}
        <div style={profileElementStyle}>
          <article style={profileTitle}>Phone</article>
          <article>+{profile?.phone}</article>
        </div>
        <div style={profileElementStyle}>
          <article style={profileTitle}>Email</article>
          <article>{profile?.email}</article>
        </div>
        <div style={profileElementStyle}>
          <article style={profileTitle}>Joined</article>
          <article>{timeAgo(profile?.created_at)} ago</article>
        </div>
      </div>
    </div>
  ) : (
    <p>Error loading your profile</p>
  );
}
