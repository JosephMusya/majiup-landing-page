import React from "react";
import { Fade } from "react-reveal";
import "./mission.css";
import { FaRegClock } from "react-icons/fa6";

export default function Mission() {
  return (
    <Fade left>
      <div>
        <div className="mission">
          <div>
            <h1>Mission</h1>
            <p>Ensuring seamless access to clean water for everyone</p>
          </div>
          <div>
            <h1>Vision</h1>
            <p>
              To eradicate water scarcity worries by revolutionizing water
              delivery, providing clean, reliable access for all.
            </p>
          </div>
        </div>
        {/* <div className="">
          <div>
            <h1>Do you have tanks that you need to monitor?</h1>
          </div>
          <div className="clock">
            <p>Get your refill in under 30 minutes!</p>
            <FaRegClock size={80} />
          </div>
        </div> */}
      </div>
    </Fade>
  );
}
