import React from "react";
import OrderCard from "../../components/order-card/OrderCard";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseConfig";
import { useOrderContext } from "../../providers/OrderProvider";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useUserContext } from "../../providers/UserProvider";
import { useState } from "react";

export default function InProgress() {
  document.title = "Orders in progress";
  const navigate = useNavigate();
  const { filter } = useOrderContext();
  const { profile } = useUserContext();
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getOrders = async () => {
    try {
      let progressQ = supabase
        .from("refills")
        .select("*, truck(owner)", { count: "exact" })
        .eq("status", "In Progress")
        .eq(`${filter.key.toString()}`, profile?.id);

      if (profile?.user_type === "trucker") {
        progressQ = progressQ.not("truck", "is", null);
      }

      const { data, error } = await progressQ;

      if (data) {
        setOrders(data);
        setError(false);
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      setError(true);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    profile && getOrders();
  }, [profile]);

  return (
    <>
      <h1 className="orders-heading">Active Orders</h1>
      {loading ? (
        <p>Loading...</p>
      ) : orders.length > 0 ? (
        <div className="orders">
          {orders?.map((order, key) => {
            return (
              <OrderCard
                order={order}
                key={key}
                onClick={() => navigate(`../order/${order.id}`)}
              />
            );
          })}
        </div>
      ) : error ? (
        <p>Error fetching your orders</p>
      ) : (
        <p>No orders found</p>
      )}
    </>
  );
}
