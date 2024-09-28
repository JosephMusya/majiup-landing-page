import React from "react";
import "./trucks.css";

import TruckCard from "../../components/truck-card/TruckCard";
import FloatingButton from "../../components/floating-button/FloatingButton";
import { useUserContext } from "../../providers/UserProvider";
import supabase from "../../config/supabaseConfig";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Trucks() {
  const navigate = useNavigate();
  const { profile } = useUserContext();
  const [loading, setLoading] = useState(true);
  const [trucks, setTrucks] = useState();

  const updateTruck = (data) => {
    setTrucks((prev) => {
      const truckToUpdate = prev.find((truck) => truck.id === data.id);

      if (truckToUpdate) {
        return prev.map((truck) =>
          truck.id === data.id ? { ...truck, ...data } : truck
        );
      }

      // If the truck is not found, return the original list
      return prev;
    });
  };

  const removeTruck = async (id) => {
    console;
    try {
      const { data, error } = await supabase
        .from("trucks")
        .delete()
        .eq("id", id)
        .select();

      if (data) {
        toast.success("Truck deleted");
        setTrucks((prev) => prev.filter((truck) => truck.id !== id));
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getTrucks = async () => {
    try {
      const { data, error } = await supabase
        .from("trucks")
        .select(
          `*, 
          owner (*)`
        )
        .eq("owner", profile.id);
      if (data) {
        setTrucks(data);
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
    profile && getTrucks();
  }, [profile]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {loading ? (
        <p>Loading...</p>
      ) : trucks.length > 0 ? (
        <>
          <h1 className="orders-heading">My Water Trucks</h1>

          <div className="trucks">
            {trucks?.map((truck, key) => {
              return (
                <TruckCard
                  truck={truck}
                  key={key}
                  navigate={navigate}
                  updateTruck={updateTruck}
                  removeTruck={() => {
                    // alert("Are you sure you want to remove this vehicle")
                    removeTruck(truck.id);
                  }}
                />
              );
            })}
          </div>
        </>
      ) : (
        <div>
          <h1 className="orders-heading">You have not added any trucks!</h1>
          <p>You can only add one water truck as a driver.</p>

          <button
            style={{ width: "fit-content" }}
            onClick={() => navigate("../add-truck")}
          >
            Register your water truck
          </button>
        </div>
      )}
    </div>
  );
}
