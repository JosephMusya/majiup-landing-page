import React from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseConfig";
import { useState } from "react";
import toast from "react-hot-toast";
import { useUserContext } from "../../providers/UserProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function EditTruck() {
  document.title = "Edit Water Truck";

  const { id } = useParams();

  const navigate = useNavigate();
  const { authUser } = useUserContext();

  const [truck, setTruck] = useState();

  const [truckName, setTruckName] = useState();
  const [driverName, setDriverName] = useState();
  const [truckCapacity, setTruckCapacity] = useState();
  const [town, setTown] = useState();
  const [vehicleReg, setVehicleReg] = useState();

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const getTruck = async () => {
    try {
      const { data, error } = await supabase
        .from("trucks")
        .select("*")
        .eq("id", id)
        .single();

      if (data) {
        setTruck(data);
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const submitEdits = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      const { data, error } = await supabase
        .from("trucks")
        .update({
          name: truckName,
          driver_name: driverName,
          town: town,
          truck_capacity: truckCapacity,
          vehicle_number: vehicleReg,
        })
        .eq("id", truck.id)
        .select();
      if (data) {
        toast.success(`Water truck updated`);
        // setTrucks((prev) => [...prev, ...data]);
        navigate(-1);
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setUpdating(false);
    }
  };

  useEffect(() => {
    getTruck();
  }, []);

  return (
    <div>
      <h1 className="orders-heading">Edit Truck</h1>
      {loading ? (
        <p>Loading,.</p>
      ) : (
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
                onChange={(text) => setTruckName(text.target.value)}
                required
              />
            </div>
            <div className="form-input">
              <label htmlFor="driver">Driver's Name</label>
              <input
                type="text"
                id="driver"
                onChange={(text) => setDriverName(text.target.value)}
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
                onChange={(text) => setTruckCapacity(text.target.value)}
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
                onChange={(text) => setTown(text.target.value)}
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
                  setVehicleReg(text.target.value.toUpperCase())
                }
                defaultValue={truck?.vehicle_number}
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
              <button
                type="submit"
                className="custom-button"
                onClick={!loading && submitEdits}
              >
                {updating ? "Loading" : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default EditTruck;
