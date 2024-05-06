import React from "react";
import { useState } from "react";
import supabase from "../../config/supabaseConfig";
import { useNavigate } from "react-router-dom";

export default function Request() {
  const [laoding, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitOrder = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const formDetails = e.target;
      const owner = formDetails?.owner.value;
      const location = formDetails?.location.value;
      const phone = formDetails?.phone.value;
      const amount_liters = formDetails?.capacity.value;
      const comment = formDetails?.comment.value;
      const address = formDetails?.address.value;
      const amount_ksh = amount_liters * 0.8;
      const status = "In Progress";

      const { data, error } = await supabase
        .from("refills")
        .insert([
          {
            owner,
            location,
            address,
            phone,
            amount_liters,
            comment,
            status,
            amount_ksh,
          },
        ])
        .select();

      if (data) {
        navigate("/");
        alert(
          "We have received your request. We will contact you for confirmation.\nThank you for using Majiup!"
        );
      } else if (error) {
        console.log(error);
        throw new Error("Failed to submit order");
      }
    } catch (err) {
      console.log(err);
      //   toast.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: "2rem", minHeight: "69dvh", maxWidth: "1200px" }}>
      <h1>Place your refill order now</h1>
      <div>
        <form onSubmit={submitOrder}>
          <div className="add-vendor-form">
            <div>
              <label htmlFor="owner">Name</label>
              <input required id="owner" type="text" placeholder="John Doe" />
            </div>
            <div>
              <label htmlFor="address">Address</label>
              <input
                required
                id="address"
                type="text"
                placeholder="Kitengela. Chuna Estate, Rd 34"
              />
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input id="location" type="text" placeholder="Choose from map" />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input required id="phone" placeholder="+2547..." />
            </div>
            <div>
              <label htmlFor="capacity">Quantity (Litres)</label>
              <input
                required
                id="capacity"
                type="number"
                placeholder="10,000"
              />
            </div>
            <div>
              <label htmlFor="comment">Comment</label>
              <input id="comment" type="text" placeholder="Add comments" />
            </div>
          </div>
          <div className="submit-vendor">
            <button>{laoding ? "Placing order..." : "Order Now"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
