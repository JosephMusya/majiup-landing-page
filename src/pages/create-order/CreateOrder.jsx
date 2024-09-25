import React from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../config/supabaseConfig";
import { useUserContext } from "../../providers/UserProvider";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

export default function CreateOrder() {
  const navigate = useNavigate();

  const { profile } = useUserContext();

  const [amountLiters, setAmountLiters] = useState(0);
  const [comment, setComment] = useState();
  const [town, setTown] = useState("");
  const [waterType, setWaterType] = useState("Raw");

  const [submitting, setSubmitting] = useState(false);

  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const getAddressFromCoordinates = async (latitude, longitude) => {
    const apiKey = ""; // Replace with your Google Maps API key
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;
    console.log(location);

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK" && data.results.length > 0) {
        console.log(data.results);
        // Look for the smallest identifiable location (e.g., city or country)
        const addressComponents = data.results[0].address_components;
        let smallestLocation = "";

        // Find the smallest location component (city or locality)
        for (let component of addressComponents) {
          if (component.types.includes("locality")) {
            smallestLocation = component.long_name; // City name
            break;
          } else if (component.types.includes("administrative_area_level_1")) {
            smallestLocation = component.long_name; // State or region name
          } else if (component.types.includes("country")) {
            smallestLocation = component.long_name; // Country name
          }
        }

        console.log(smallestLocation);

        // setAddress(smallestLocation || data.results[0].formatted_address); // Fallback to full address if no smaller location found
      } else {
        // setError('Unable to retrieve address.');
      }
    } catch (error) {
      // setError('Error fetching address: ' + error.message);
    }
  };

  // useEffect(() => {
  //   location.latitude &&
  //     getAddressFromCoordinates(location.latitude, location.longitude);
  // }, [location]);

  // useEffect(() => {
  //   getLocation();
  // }, []);

  const createOrder = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      const { data, error } = await supabase
        .from("refills")
        .insert([
          {
            owner: profile.id,
            amount_liters: amountLiters,
            status: "In Progress",
            comment: comment,
            water_type: waterType,
            town: town,
            location: {}, // json cordinates
            confirmed: false,
          },
        ])
        .select()
        .single();

      if (data) {
        console.log(data);
        toast.success("Your order has been made, wait for confirmation");
        navigate(`../order/${data.id}`);
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

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
              onChange={(text) => {
                setAmountLiters(text.target.value);
              }}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="water-type">Water Type</label>
            <select
              name="water-type"
              id="water-type"
              onChange={(text) => {
                setWaterType(text.value);
              }}
            >
              <option value="Raw" defaultValue>
                Raw Water
              </option>
              <option value="Purified">Purified Water</option>
            </select>
          </div>
          <div className="form-input">
            <label htmlFor="comments">Comment</label>
            <input
              type="text"
              id="Comment"
              onChange={(text) => {
                setComment(text.target.value);
              }}
            />
          </div>
          <div className="form-input">
            <label htmlFor="town">Town - select from map</label>
            <input
              type="text"
              id="town"
              placeholder="We need to know your location"
              onChange={(text) => {
                setTown(text.target.value);
              }}
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
            <button onClick={createOrder} className="custom-button">
              {submitting ? "Requesting" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
