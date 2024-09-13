import React from "react";
import { useNavigate } from "react-router-dom";

function AddTrucks() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="orders-heading">Add Truck</h1>
      <div style={{ maxWidth: "600px", marginTop: "1rem" }}>
        <form
          action=""
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div className="form-input">
            <label htmlFor="truck">Truck Name</label>
            <input type="text" id="truck" required />
          </div>
          <div className="form-input">
            <label htmlFor="truck">Driver</label>
            <select name="select-driver" id="driver" required>
              <option value="">Driver 1</option>
              <option value="">Driver 2</option>
              <option value="">Driver 3</option>
              <option value="">Driver 3</option>
            </select>
          </div>
          <div className="form-input">
            <label htmlFor="capacity">Truck Capacity - Liters</label>
            <input
              type="number"
              id="capacity"
              placeholder="example: 10,000 Liters"
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="town">Town / Region of Operation</label>
            <input type="text" id="town" required />
          </div>
          <div className="form-input">
            <label htmlFor="plate_number">Vehicle Registration Number</label>
            <input
              type="text"
              id="plate_number"
              placeholder="KXX 123A"
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
              Add Truck
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTrucks;
