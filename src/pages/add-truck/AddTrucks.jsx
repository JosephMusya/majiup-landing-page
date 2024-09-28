import React from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseConfig";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUserContext } from "../../providers/UserProvider";

function AddTrucks() {
  const navigate = useNavigate();
  const { authUser } = useUserContext();
  const [loading, setLoading] = useState(false);

  const [truckDetails, setTruckDetails] = useState({
    truckName: "",
    driverName: "",
    truckCapacity: 0,
    town: "",
    vehicleReg: "",
  });

  // const [truckName, setTruckName] = useState("");
  // const [driverName, setDriverName] = useState("");
  // const [truckCapacity, setTruckCapacity] = useState(0);
  // const [town, setTown] = useState("");
  // const [vehicleReg, setVehicleReg] = useState("");

  const addTruck = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("trucks")
        .insert([
          {
            owner: authUser.id,
            name: truckDetails?.truckName,
            driver_name: truckDetails?.driverName,
            town: truckDetails?.town,
            truck_capacity: truckDetails?.truckCapacity,
            vehicle_number: truckDetails?.vehicleReg,
          },
        ])
        .select();
      if (data) {
        toast.success(`Water truck ${truckDetails?.truckName} added`);
        // setTrucks((prev) => [...prev, ...data]);
        navigate(-1);
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="orders-heading">Add Truck</h1>
      <div style={{ maxWidth: "600px", marginTop: "1rem" }}>
        <form
          action=""
          onSubmit={(e) => {
            if (!loading) {
              addTruck(e);
            } else {
              e.preventDefault();
            }
          }}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div className="form-input">
            <label htmlFor="truck">Truck Name</label>
            <input
              type="text"
              id="truck"
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
                  vehicleReg: text.target.value,
                }))
              }
              required
              style={{ textTransform: "uppercase" }}
            />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button
              className="custom-button"
              style={{ backgroundColor: "gray" }}
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </button>
            <button type="submit" className="custom-button">
              {loading ? "Adding..." : "Add Truck"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTrucks;
