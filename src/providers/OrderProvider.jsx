import { createContext } from "react";
import { useUserContext } from "./UserProvider";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import supabase from "../config/supabaseConfig";
import toast from "react-hot-toast";

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

  const retriveAllOrders = async () => {
    try {
      setLoadingOrders(true);

      const { count: completed, error: completedErr } = await supabase
        .from("refills")
        .select("*, truck(owner)", { count: "exact" })
        .eq("status", "Completed")
        .eq(`${filter.key.toString()}`, profile?.id)
        .not("truck", "is", null);

      let progressQ = supabase
        .from("refills")
        .select("*, truck(owner)", { count: "exact" })
        .eq("status", "In Progress")
        .eq(`${filter.key.toString()}`, profile?.id);

      if (profile?.user_type === "trucker") {
        progressQ = progressQ.not("truck", "is", null);
      }

      const { count: inProgress, error: progressErr, data } = await progressQ;

      const { count: cancelled, error: cancelledErr } = await supabase
        .from("refills")
        .select("*, truck(owner)", { count: "exact" })
        .eq("status", "Cancelled")
        .eq(`${filter.key.toString()}`, profile?.id)
        .not("truck", "is", null);

      const { count: total, error: totalError } = await supabase
        .from("refills")
        .select("*, truck(owner)", { count: "exact" })
        .eq(`${filter.key.toString()}`, profile?.id)
        .in("status", ["Completed", "In Progress"])
        .not("truck", "is", null);
      // .not("status", "is", "Cancelled");

      // const { data: totalLitersOrders, error } = await supabase
      //   .from("refills")
      //   .select("amount_liters, truck(owner)", { count: "exact" })
      //   .eq(`${filter.key.toString()}`, profile?.id);

      const { data: totalLitersOrders, error } = await supabase
        .from("refills")
        .select("amount_liters, truck(owner)", { count: "exact" })
        .eq(`${filter.key.toString()}`, profile?.id)
        .in("status", ["Completed", "In Progress"])
        .not("truck", "is", null);

      let totalLiters = 0;
      if (error) {
        // console.error("Error fetching data:", error);
        toast.error("Some error occured");
      } else if (totalLitersOrders?.length > 0) {
        // Sum the amount_liters
        totalLiters = totalLitersOrders.reduce(
          (total, row) => total + (row.amount_liters || 0), // Handle possible null or undefined values
          0 // Initial value for total
        );
      }
      // console.log(totalLitersOrders);
      // const totalLiters = totalLitersOrders.reduce(
      //   (total, row) => total + row.amount_liters
      // );

      // console.log({ completed, inProgress, cancelled });
      setOrdersCount({
        inProgress: inProgress,
        completed: completed,
        cancelled: cancelled,
        total: total,
        totalLiters: totalLiters,
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
    <OrderContext.Provider value={{ ordersCount, loadingOrders, filter }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export function useOrderContext() {
  return useContext(OrderContext);
}
