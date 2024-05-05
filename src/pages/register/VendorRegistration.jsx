import React from "react";
import "./add-vendor.css";
import supabase from "../../config/supabaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function VendorRegistration() {
  const navigate = useNavigate();
  const [laoding, setLoading] = useState(false);
  const submitVendorDetails = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const formDetails = e.target;
      const company_name = formDetails?.company.value;
      const name = formDetails?.name.value;
      const town = formDetails?.town.value;
      const location = formDetails?.location.value;
      const phone = formDetails?.phone.value;
      const truck_capacity = formDetails?.capacity.value;
      const driver_id = formDetails?.id.value;
      const vehicle_number = formDetails?.vehicleNo.value;

      const { data, error } = await supabase
        .from("vendors")
        .insert([
          {
            company_name,
            name,
            town,
            location,
            phone,
            truck_capacity,
            vehicle_number,
            driver_id,
          },
        ])
        .select();

      if (data) {
        navigate("/");
        console.log("Added");
      } else if (error) {
        console.log(error);
        throw new Error("Failed to add vendor");
      }
    } catch (err) {
      console.log(err);
      //   toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-vendor">
      <h1>Register with us</h1>
      <div>
        <form onSubmit={submitVendorDetails}>
          <div className="add-vendor-form">
            <div>
              <label htmlFor="name">Company Name</label>
              <input
                required
                id="company"
                type="text"
                placeholder="Company Name"
              />
            </div>
            <div>
              <label htmlFor="name">Driver Name</label>
              <input required id="name" type="text" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="town">Town</label>
              <input
                required
                id="town"
                type="text"
                placeholder="Closest location e.g Kitengela"
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input id="location" type="text" placeholder="Choose from map" />
            </div>
            <div>
              <label htmlFor="Phone">Phone</label>
              <input required id="phone" placeholder="+2547..." />
            </div>
            <div>
              <label htmlFor="id">ID Number</label>
              <input required id="id" type="number" />
            </div>
            <div>
              <label htmlFor="capacity">Truck Capacity (Litres)</label>
              <input
                required
                id="capacity"
                type="number"
                placeholder="10,000"
              />
            </div>
            <div>
              <label htmlFor="vehicleNo">Vehicle Plate Number</label>
              <input
                required
                id="vehicleNo"
                type="text"
                placeholder="KXX 123X"
              />
            </div>
          </div>
          <div className="submit-vendor">
            <button>{laoding ? "Adding..." : "Submit"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
