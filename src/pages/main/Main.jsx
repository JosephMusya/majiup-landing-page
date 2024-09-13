import React from "react";
import "./main.css";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Main = () => {
  const navigate = useNavigate();
  const iconSize = 23;
  return (
    <div className="home">
      <div className="headline">
        <h1>Clean water delivery and management for every home and business</h1>
      </div>
      <div className="description">
        <article>
          Are you in need of a water refill in your tank at affordable price?
          Worry no more, Majiup got you covered.
        </article>
      </div>
      <div className="call-action">
        <Link to="/dashboard" className="request-btn">
          Request water refill <BsArrowRight size={iconSize} />
        </Link>
        <Link to="/dashboard" className="register-v">
          Register as vendor <BsArrowRight size={iconSize} />
        </Link>
      </div>
    </div>
  );
};

export default Main;
