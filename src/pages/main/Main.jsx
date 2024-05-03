import React from "react";
import "./main.css";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="headline">
        <h1>Clean water delivery and management for every home and business</h1>
      </div>
      <div className="description">
        <article>
          Ready to make a difference in how you manage your water resources?
          Reach out to us today to discover Majiup's IoT solutions.
        </article>
      </div>
      <div className="call-action">
        <Link to="/request-refill" className="request-btn">
          Request water refill <BsArrowRight size={23} />
        </Link>
        <Link to="/vendor-registration">
          Register as vendor <BsArrowRight size={23} />
        </Link>
      </div>
    </div>
  );
};

export default Main;
