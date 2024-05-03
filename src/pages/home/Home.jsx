import React from "react";
import "./home.css";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="headline">
        <h1>
          Monitoring the world's most precious resource and keeping your bills
          low
        </h1>
      </div>
      <div className="description">
        <article>
          Welcome to our company, where we are dedicated to transforming the way
          we manage water through innovative IoT solutions. Our team of experts
          specializes in monitoring water levels, quality, leakage detection,
          pump Control and usage history to provide comprehensive data analysis
          for our clients.
        </article>
      </div>
      <div className="call-action">
        <button onClick={() => navigate("/request-refill")}>
          Request water refill
          <BsArrowRight size={23} />
        </button>
        <button onClick={() => navigate("/register")}>
          Register as Vendor
          <BsArrowRight size={23} />
        </button>
      </div>
    </div>
  );
};

export default Home;
