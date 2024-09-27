import React from "react";
import OrderCard from "../../components/order-card/OrderCard";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../providers/UserProvider";
import { useOrderContext } from "../../providers/OrderProvider";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import supabase from "../../config/supabaseConfig";

export default function Cancelled() {
  document.title = "Cancelled Orders";
  const navigate = useNavigate();

  const { filter } = useOrderContext();
  const { profile } = useUserContext();
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getOrders = async () => {
    try {
      const { data, error } = await supabase
        .from("refills")
        .select("*, truck(owner)", { count: "exact" })
        .eq("status", "Cancelled")
        .not("truck", "is", null)
        .eq(`${filter.key.toString()}`, profile?.id);

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
      <h1 className="orders-heading">Cancelled Orders</h1>
      {loading ? (
        <p>Loading...</p>
      ) : orders?.length > 0 ? (
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
