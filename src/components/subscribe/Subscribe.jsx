import React from "react";
import "./subscribe.css";
import { MdOutlineEmail } from "react-icons/md";
import Bounce from "react-reveal/Bounce";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div>
        <Bounce>
          <h1>Interested about us?</h1>
        </Bounce>
        <article>Subscribe to our monthly newsletter releases</article>
      </div>
      <div className="details">
        <article>
          <MdOutlineEmail size={20} />
        </article>
        <input type="email" placeholder="Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
