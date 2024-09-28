import React from "react";
import supabase from "../../config/supabaseConfig";
import { useState } from "react";
import toast from "react-hot-toast";
import { useEffect } from "react";

function EditTruck({ truck, close, updateTruck }) {
  const [truckDetails, setTruckDetails] = useState({
    truckName: "",
    driverName: "",
    truckCapacity: 0,
    town: "",
    vehicleReg: "",
  });

  useEffect(() => {
    truck &&
      setTruckDetails({
        truckName: truck?.name,
        driverName: truck?.driver_name,
        town: truck?.town,
        truckCapacity: truck?.truck_capacity,
        vehicleReg: truck?.vehicle_number,
      });
  }, [truck]);

  const [updating, setUpdating] = useState(false);

  const submitEdits = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      const { data, error } = await supabase
        .from("trucks")
        .update({
          name: truckDetails?.truckName,
          driver_name: truckDetails?.driverName,
          town: truckDetails?.town,
          truck_capacity: truckDetails?.truckCapacity,
          vehicle_number: truckDetails?.vehicleReg,
        })
        .eq("id", truck.id)
        .select()
        .single();
      if (data) {
        updateTruck(data);
        toast.success(`Water truck updated`);
        close();
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div>
      <h1 className="orders-heading">Edit Truck</h1>
      {
        <div style={{ maxWidth: "600px", marginTop: "1rem" }}>
          <form
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div className="form-input">
              <label htmlFor="truck">Truck Name</label>
              <input
                type="text"
                id="truck"
                defaultValue={truck?.name}
                onChange={(text) =>
                  setTruckDetails((prev) => ({
                    ...prev,
                    truckName: text.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="driver">Driver's Name</label>
              <input
                type="text"
                id="driver"
                onChange={(text) =>
                  setTruckDetails((prev) => ({
                    ...prev,
                    driverName: text.target.value,
                  }))
                }
                defaultValue={truck?.driver_name}
                required
                placeholder="Enter driver's name"
              />
            </div>
            <div className="form-input">
              <label htmlFor="capacity">Truck Capacity - Liters</label>
              <input
                type="number"
                id="capacity"
                placeholder="example: 10,000 Liters"
                onChange={(text) =>
                  setTruckDetails((prev) => ({
                    ...prev,
                    truckCapacity: text.target.value,
                  }))
                }
                defaultValue={truck?.truck_capacity}
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="town">Town / Region of Operation</label>
              <input
                type="text"
                id="town"
                placeholder="What's the main area of operation"
                onChange={(text) =>
                  setTruckDetails((prev) => ({
                    ...prev,
                    town: text.target.value,
                  }))
                }
                defaultValue={truck?.town}
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="plate_number">Vehicle Registration Number</label>
              <input
                type="text"
                id="plate_number"
                placeholder="KXX 123A"
                onChange={(text) =>
                  setTruckDetails((prev) => ({
                    ...prev,
                    vehicleReg: text.target.value.toString().toUpperCase(),
                  }))
                }
                defaultValue={truck?.vehicle_number}
                required
                style={{ textTransform: "uppercase" }}
              />
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                onClick={close}
                className="custom-button"
                style={{ backgroundColor: "gray" }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="custom-button"
                onClick={(e) => {
                  if (!updating) {
                    submitEdits(e);
                  }
                }}
              >
                {updating ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      }
    </div>
  );
}

export default EditTruck;
