import React from "react";
import "./chat.css";
import { LuSendHorizonal } from "react-icons/lu";
import waziupLogo from "../../assets/waziup-logo.svg";

const Chat = () => {
  return (
    <div className="chat">
      <strong>Leave us a message</strong>
      <div>
        <div className="subject">
          <label htmlFor="subject">Subject</label>
          <select name="subject" id="subject">
            <option value="careers">Careers</option>
            <option value="investiment">Investiment</option>
            <option value="help">Help</option>
          </select>
        </div>
        <div className="message">
          <label htmlFor="message">Message</label>
          <input type="text" id="message" />
          <article>
            <LuSendHorizonal
              style={{ cursor: "pointer" }}
              size={18}
              color="gray"
            />
          </article>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <p>Powered by waziup IoT Technology</p>
        <a href="https://www.waziup.org" target="_blank">
          <img
            src={waziupLogo}
            style={{ width: "8rem", aspectRatio: 1 }}
            alt="Waziup Logo"
          />
        </a>
      </div>
    </div>
  );
};

export default Chat;
