import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div>
          <strong>Products & Services</strong>
          <li>Majiup IoT Device</li>
          <li>Water monitoring services</li>
          <li>Water re/fill fulfilment Services</li>
        </div>
        <div>
          <strong>Contact us</strong>
          <li>contact@majiup.com</li>
          {/* <li>support@majiup</li> */}
          <li>+254757405701</li>
        </div>
        <div>
          <strong>Resources</strong>
          <li>Installation guide</li>
          <li>Majiup software user guide</li>
        </div>
      </div>
      <div className="bottom">
        <img src={logo} alt="logo" />
        <article>Privacy Policy</article>
        <article>Terms of Service - Water Vendors/Bowsers</article>
        <article>Terms of Service - Clients</article>
        <article>&copy; Majiup 2023</article>
      </div>
    </div>
  );
};

export default Footer;
