import React from "react";
import DashCard from "../../components/dash-card/DashCard";
import { FaTruckDroplet } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import { useUserContext } from "../../providers/UserProvider";
import { timeAgo } from "../../utils/helpers/timeAgo";
export default function Profile() {
  const { authUser, profile, loadingUser } = useUserContext();

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

  return (
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
            style={{
              backgroundColor: "#F4F4F4",
              color: "#000",
              borderRadius: "2rem",
              padding: "0.6rem 0.9rem",
            }}
          >
            Update Profile
          </button>
        </div>
      </div>
      <div className="dashboard-cards" style={{ paddingTop: "2rem" }}>
        <DashCard
          number={10}
          description="Orders Placed"
          icon={<FaTruckDroplet size={iconSize} color="#fff" />}
        />
        <DashCard
          number={340588}
          unit="Ltrs"
          description="Liters Ordered"
          icon={<FaHandHoldingWater size={iconSize} color="#fff" />}
        />
      </div>
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
        <div style={profileElementStyle}>
          <article style={profileTitle}>Area of Operartion</article>
          <article>{profile?.town}</article>
        </div>
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
  );
}
