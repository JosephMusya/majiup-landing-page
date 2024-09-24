import { createContext } from "react";
import { useUserContext } from "./UserProvider";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import supabase from "../config/supabaseConfig";

export const OrderContext = createContext();

export const OrderProvider = (props) => {
  const { authUser, profile } = useUserContext();
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [ordersCount, setOrdersCount] = useState({
    inProgress: 0,
    completed: 0,
    cancelled: 0,
    total: 0,
    totalLiters: 0,
  });

  const retriveAllOrders = async () => {
    let filter;

    if (profile?.user_type === "client") {
      filter = {
        key: "owner",
      };
    } else if (profile?.user_type === "trucker") {
      filter = {
        key: "truck.owner",
      };
    }

    try {
      setLoadingOrders(true);

      const { count: completed, error: completedErr } = await supabase
        .from("refills")
        .select("*, truck(owner)", { count: "exact" })
        .eq("status", "Completed")
        .eq(`${filter.key.toString()}`, profile?.id);

      const { count: inProgress, error: progressErr } = await supabase
        .from("refills")
        .select("*, truck(owner)", { count: "exact" })
        .eq("status", "In Progress")
        .eq(`${filter.key.toString()}`, profile?.id);

      const { count: cancelled, error: cancelledErr } = await supabase
        .from("refills")
        .select("*, truck(owner)", { count: "exact" })
        .eq("status", "Cancelled");

      const { count: total, error: totalError } = await supabase
        .from("refills")
        .select("*, truck(owner)", { count: "exact" })
        .eq(`${filter.key.toString()}`, profile?.id);

      const { data: totalLitersOrders, error } = await supabase
        .from("refills")
        .select("*, truck(owner)", { count: "exact" })
        .select("amount_liters");
      // .eq(`${filter.key.toString()}`, profile?.id);

      const totalLiters = totalLitersOrders.reduce(
        (total, row) => total + row.amount_liters
      );

      // console.log({ completed, inProgress, cancelled });
      setOrdersCount({
        inProgress: inProgress,
        completed: completed,
        cancelled: cancelled,
        total: total,
        totalLiters: totalLiters.amount_liters,
      });

      if (completedErr) {
        throw new Error(completedErr.message);
      }
      if (progressErr) {
        throw new Error(progressErr.message);
      }
      if (cancelledErr) {
        throw new Error(cancelledErr.message);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoadingOrders(false);
    }
  };

  useEffect(() => {
    profile && retriveAllOrders();
  }, [profile]);

  return (
    <OrderContext.Provider value={{ ordersCount, loadingOrders }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export function useOrderContext() {
  return useContext(OrderContext);
}
