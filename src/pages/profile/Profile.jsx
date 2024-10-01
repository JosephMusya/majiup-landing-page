import React from "react";
import DashCard from "../../components/dash-card/DashCard";
import { FaTruckDroplet } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { FaHandHoldingWater } from "react-icons/fa";
import { useUserContext } from "../../providers/UserProvider";
import { timeAgo } from "../../utils/helpers/timeAgo";
import { useOrderContext } from "../../providers/OrderProvider";
import { MdModeEdit } from "react-icons/md";
import CustomPopup from "../../components/popup/Popup";
import toast from "react-hot-toast";
import { useState } from "react";
import supabase from "../../config/supabaseConfig";
import { useEffect } from "react";

export default function Profile() {
  const { authUser, profile, loadingUser, updateProfile } = useUserContext();
  const { ordersCount, loadingOrders } = useOrderContext();
  const [otp, setOtp] = useState();

  const [submiting, setSubmiting] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);

  const [editProfile, setEditProfile] = useState({
    name: "",
    phone: "",
    town: "",
  });

  // console.log(profile);

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

  const submitProfile = async () => {
    try {
      setSubmiting(true);
      const { data, error } = await supabase
        .from("profiles")
        .update({
          name: editProfile?.name,
          phone: editProfile?.phone,
          town: editProfile.town ?? "",
        })
        .eq("id", profile?.id)
        .select("name,phone,town")
        .single();

      if (editProfile?.phone !== profile?.phone) {
        try {
          const { _, error: updatePhoneErr } = await supabase.auth.updateUser({
            phone: editProfile.phone,
          });
          if (updatePhoneErr) {
            throw new Error(updatePhoneErr.message);
          }
        } catch (error) {
          console.error(error.message);
          toast.error("Phone number not updated");
        }
      }

      console.log(data);

      if (data) {
        updateProfile(data);
        toast.success("Your profile has been updated!");
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
      throw new Error(error.message);
    } finally {
      setSubmiting(false);
    }
  };

  const sendOtp = async () => {
    try {
      setSendingOtp(true);
      console.log(profile?.phone);
      const { data, error } = await supabase.auth.signInWithOtp({
        phone: profile?.phone,
      });

      if (data.user || data.session) {
        toast.success(`OTP has been sent to ${profile?.phone}`);
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(`Failed to send OTP message`);
      toast.error(error.message);
    } finally {
      setSendingOtp(false);
    }
  };

  const submitOTP = async () => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        phone: profile?.phone,
        token: otp,
        type: "sms",
      });

      if (error) {
        throw new Error(error.message);
      } else if (data) {
        //update user
        const { data, error } = await supabase.auth.updateUser({
          data: {
            phone_verified: true,
          },
          // phone: phone
        });

        if (error) {
          throw new Error(error.message);
        } else if (data) {
          toast.success("Congratulations! You are now verified!");
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    profile &&
      setEditProfile((prev) => ({
        ...prev,
        name: profile?.name,
        phone: profile?.phone,
        town: profile?.town,
      }));
  }, [profile]);

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
            {authUser.user_metadata.phone_verified && (
              <span
                style={{
                  alignSelf: "flex-start",
                }}
              >
                <MdVerified size={24} color="#0072bb" />
              </span>
            )}
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
          <CustomPopup
            trigger={
              <button
                className="flex-row"
                style={{
                  backgroundColor: "#F4F4F4",
                  color: "#000",
                  borderRadius: "2rem",
                  padding: "0.5rem 1rem",
                  alignItems: "center",
                }}
              >
                <span>
                  <MdModeEdit size={22} />
                </span>
                Update Profile
              </button>
            }
            closeOnDocumentClick={false}
            title="Edit Profile"
            confirmText={submiting ? "submitting..." : "submit"}
            onConfirm={(e) => {
              if (!submiting) {
                submitProfile();
              }
            }}
            children={
              <div style={{ paddingBottom: "1rem" }}>
                <form
                  className="flex-column"
                  onSubmit={(e) => e.preventDefault()}
                  style={{ gap: "0.5rem" }}
                >
                  <div className="form-input">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      defaultValue={profile?.name}
                      onChange={(text) =>
                        setEditProfile((prev) => ({
                          ...prev,
                          name: text.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="form-input">
                    <label htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      type="text"
                      readOnly
                      defaultValue={profile?.phone}
                      onChange={(text) =>
                        setEditProfile((prev) => ({
                          ...prev,
                          phone: text.target.value,
                        }))
                      }
                    />
                  </div>
                  {profile?.user_type === "trucker" && (
                    <div className="form-input">
                      <label htmlFor="name">Area of Operation</label>
                      <input
                        id="name"
                        type="text"
                        defaultValue={profile?.town}
                        onChange={(text) =>
                          setEditProfile((prev) => ({
                            ...prev,
                            town: text.target.value,
                          }))
                        }
                      />
                    </div>
                  )}
                </form>
              </div>
            }
          />
        </div>
      </div>
      <div className="dashboard-cards" style={{ paddingTop: "2rem" }}>
        <DashCard
          number={loadingOrders ? "---" : ordersCount.total}
          description={`Order${ordersCount.total > 1 ? "s" : ""} ${
            profile.user_type === "client"
              ? "Request"
              : profile.user_type === "trucker" && "Delivered"
          }`}
          icon={<FaTruckDroplet size={iconSize} color="#fff" />}
        />
        <DashCard
          number={loadingOrders ? "---" : ordersCount.totalLiters}
          unit="Ltrs"
          description={`Liters  ${
            profile.user_type === "client"
              ? "Ordered"
              : profile.user_type === "trucker" && "Supplied"
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
          <p style={{ color: "orange" }}>We need to verify your phone number</p>
          <CustomPopup
            trigger={
              <button
                style={{
                  // backgroundColor: "#f6f6f6",
                  backgroundColor: " #0072bb",
                  // backgroundColor: "orange",
                  color: "#fff",
                  borderRadius: "2rem",
                  padding: "0.8rem 1rem",
                }}
              >
                {"Verify Now"}
              </button>
            }
            onOpen={sendOtp}
            onConfirm={otp?.length === 6 && submitOTP}
            confirmStyle={{
              backgroundColor: otp?.length < 6 && "#f4f4f4",
              color: "#000",
              cursor: otp?.length < 6 && "not-allowed",
            }}
            title="Submit OTP"
            body={`An OTP was sent to +${profile?.phone}`}
            confirmText={sendingOtp ? "Please wait..." : "submit"}
            closeOnDocumentClick={false}
            children={
              <div className="form-input" style={{ marginBottom: "1rem" }}>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  onChange={(text) => setOtp(text.target.value)}
                  style={{ fontSize: "1.5rem", letterSpacing: "2px" }}
                />
              </div>
            }
          />
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
          <article>+{authUser?.phone}</article>
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
