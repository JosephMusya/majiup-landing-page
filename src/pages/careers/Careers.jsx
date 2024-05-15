import React from "react";
import "./careers.css";
import { GoDash } from "react-icons/go";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";
import Flash from "react-reveal/Flash";
// import { careers } from "../../utils/careers";
import Markdown from "react-markdown";
// import { careers } from "./careers.md";
import { useEffect } from "react";
import markdown from "./md/careers.md";

const Careers = () => {
  return (
    <div className="careers">
      <h1>
        <GoDash /> We are Hiring
      </h1>
      <div>
        <Markdown>{markdown}</Markdown>
      </div>

      {/* <div className="open-positions">
        {careers?.map((career) => {
          return (
            <Zoom>
              <div className="position">
                <h2 className="title">{career.title}</h2>
                <div>{career.description}</div>
                <div className="careers-action">
                  <button>View Position</button>
                  <button className={career.closed ? "closed" : "open"}>
                    {career.status}
                  </button>
                </div>
              </div>
            </Zoom>
          );
        })}
      </div> */}
      <div
        className="apply-help"
        style={{
          padding: "2rem 0",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          backgroundColor: "",
        }}
      >
        <AiOutlineInfoCircle size={30} />
        <article>
          Submit your application to{" "}
          <span style={{ color: "#0072bb", cursor: "pointer" }}>
            contact@majiup.com
          </span>
        </article>
      </div>
    </div>
  );
};

export default Careers;
