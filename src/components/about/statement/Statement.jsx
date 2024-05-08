import { GoDash } from "react-icons/go";
import "./statement.css";
import React, { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Fade from "react-reveal";
import { IoCheckmarkCircle } from "react-icons/io5";

const Statement = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const iconSize = 25;

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position
      const currentPosition = window.scrollY;

      // Update the scroll position state
      setScrollPosition(currentPosition);
    };

    // Add a scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="statements">
      <Fade left>
        <div className="statement-top">
          <div className="statement-heading">
            <GoDash size={30} />
            <h1>Majiup is solving access to clean water problem in Kenya</h1>
          </div>
          <div className="statement-content">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <li>
                Do not let your tanks run dry. Use majiup to order for a refill.
              </li>
              <li>
                Use our majiup devices to monitor your water tank levels and
                stay updated!
              </li>
              <li>
                We remove the aisle of worrying where to get clean water from!
              </li>
            </div>
          </div>
        </div>
      </Fade>
      <Fade left>
        <div className="main-statement">
          <div className="statement-bottom">
            <div
              className="first-box"
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              <h1>Do you have tanks that need to be monitored?</h1>
              <button className="get-dev">
                Get your majiup device now! <BsArrowRight />
              </button>
              <div
                className="majiup-device-desc"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div>
                  <article>
                    <IoCheckmarkCircle size={iconSize} color="#0072bb" />
                  </article>
                  <p>
                    Majiup devices let you know when you are running low on
                    water!
                  </p>
                </div>
                <div>
                  <article>
                    <IoCheckmarkCircle size={iconSize} color="#0072bb" />
                  </article>
                  <p>
                    Majiup devices monitor your water usage and eliminate
                    wastage.
                  </p>
                </div>
                <div>
                  <article>
                    <IoCheckmarkCircle size={iconSize} color="#0072bb" />
                  </article>
                  <p>
                    Majiup devices notifies you of any potential leakages in
                    your tanks
                  </p>
                </div>
              </div>
            </div>
            <div className="majiup-image">
              <img
                src="https://d3f46d68kgqe8v.cloudfront.net/uploads/images/hero/_1200x630_crop_center-center_82_none/Mbns18_antimicrobial-protection-for-water-storage-tanks-mtime20190228164054.jpg?mtime=1703782775"
                alt="majiup image"
              />
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Statement;
