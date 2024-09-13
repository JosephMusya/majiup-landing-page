import React from "react";
import { useNavigate } from "react-router-dom";

export default function CreateOrder() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="orders-heading">Create Water Truck Order</h1>
      <div style={{ maxWidth: "600px", marginTop: "1rem" }}>
        <form
          action=""
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div className="form-input">
            <label htmlFor="quantity">Water Quantity (Liters)</label>
            <input
              type="number"
              id="quantity"
              placeholder="How much quantity do you need"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="water-type">Water Type</label>
            <select name="water-type" id="water-type">
              <option value="">Raw Water</option>
              <option value="">Purified Water</option>
            </select>
          </div>
          <div className="form-input">
            <label htmlFor="comments">Comment</label>
            <input type="text" id="Comment" />
          </div>
          <div className="form-input">
            <label htmlFor="town">Town - select from map</label>
            <input
              type="text"
              id="town"
              placeholder="We need to know your location"
              required
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
