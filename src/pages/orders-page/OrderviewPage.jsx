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
import { useState } from "react";
import supabase from "../../config/supabaseConfig";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { timeAgo } from "../../utils/helpers/timeAgo";
import { useUserContext } from "../../providers/UserProvider";
import DriverCard from "../../components/card-drivers/DriverCard";
import CustomPopup from "../../components/popup/Popup";
import { useNavigate } from "react-router-dom";

export default function OrderViewPage() {
  const { profile } = useUserContext();
  const navigate = useNavigate();

  const iSize = 28;
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState();
  const [updating, setUpdating] = useState(false);

  const updateOrder = async (status) => {
    console.log(status);

    try {
      setUpdating(true);
      const { data, error } = await supabase
        .from("refills")
        .update({ status: status })
        .eq("id", id)
        .select("status")
        .single();

      if (data) {
        // console.log(data);
        setOrder((prevOrder) => ({
          ...prevOrder,
          status: data.status,
        }));
        toast.success("Order updated");
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error("Failed to update this order");
    } finally {
      setUpdating(false);
    }
  };

  const getOrder = async () => {
    try {
      const { data, error } = await supabase
        .from("refills")
        .select(
          `*,
          owner(phone, name, email),
          truck("*", owner(phone,name,email))
          `
        )
        .eq("id", id)
        .single();

      if (data) {
        console.log(data);
        setOrder(data);
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getOrder();
  }, [id]);

  return (
    <div className="header-section" style={{ paddingTop: "1rem" }}>
      {loading ? (
        <p>Loading</p>
      ) : order ? (
        <div
          className="refill-content"
          style={{
            boxShadow: "none",
            border: "none",
            gap: "0.8rem !important",
          }}
        >
          <Status status={order?.status} top={"0%"} right={"0%"} />
          <div className="heading">
            <h1>{order?.owner.name}</h1>
            <small>{timeAgo(order?.created_at)}</small>
          </div>
          {order?.truck && (
            <div className="flex-row">
              <FaRegClock size={iSize} color="#0072bb" />
              <h2>Delivery in {1} hour</h2>
            </div>
          )}

          <div className="loc-card">
            <MdLocationOn color="red" size={30} />
            <h2>{order?.town}</h2>
          </div>
          <div>
            <article>{order?.water_type} water request</article>
          </div>
          <section className="cards">
            <DashCard
              description="Liters Requested"
              number={order?.amount_liters}
              unit="Ltrs"
              icon={<MdWaterDrop size={iSize} color="#fff" />}
            />
            {order && (
              <DashCard
                description="Total Water Cost"
                number={order.amount_ksh ?? 3800}
                unit="Ksh"
                icon={<RiMoneyDollarCircleLine size={iSize} color="#fff" />}
              />
            )}
          </section>

          {order?.truck ? (
            <div
              style={{
                width: "24rem",
              }}
            >
              <DriverCard truck={order?.truck} />
            </div>
          ) : (
            profile?.user_type === "client" &&
            order?.status === "In Progress" && (
              <p>Finding the best water trucker for you ...</p>
            )
          )}
          {order?.comment && (
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
              <article>{order?.comment}</article>
            </div>
          )}

          <div className="actions">
            {order?.status === "In Progress" && (
              <>
                <CustomPopup
                  title="Are you sure you want to cancel?"
                  body="This action will cancel this order."
                  trigger={
                    <button
                      style={{
                        backgroundColor: "#f4f4f4",
                        minWidth: "15rem",
                        color: "#000",
                      }}
                    >
                      Cancel Order
                    </button>
                  }
                  cancelText="back"
                  confirmText="cancel order"
                  confirmStyle={{ backgroundColor: "red" }}
                  onConfirm={() => {
                    updateOrder("Cancelled");
                  }}
                />
                {order?.truck && (
                  <CustomPopup
                    title="Complete order?"
                    body="Complete order when you have delivered the order."
                    trigger={
                      <button
                        style={{
                          minWidth: "15rem",
                        }}
                      >
                        Complete Order
                      </button>
                    }
                    cancelText="back"
                    confirmText={updating ? "Updating..." : "Complete"}
                    onConfirm={() => {
                      !updating && updateOrder("Completed");
                    }}
                  />
                )}
              </>
            )}
            {(order?.status === "Completed" || order?.status === "Cancelled") &&
              profile?.user_type === "client" && (
                <button
                  style={{
                    minWidth: "15rem",
                  }}
                  onClick={() =>
                    order
                      ? navigate("../create-order", { state: order })
                      : toast.error("Failed to load this order")
                  }
                >
                  Reorder
                </button>
              )}
          </div>
        </div>
      ) : (
        <p>Error occured</p>
      )}
    </div>
  );
}
