import React from "react";
import "./faq.css";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <div className="faq-box">
      <h1>Frequently asked questions</h1>
      <div className="faqs">
        <div className="q">
          <article>How much does the majiup device cost?</article>
          <small>
            Majiup devices are free, however an installation fee of Ksh: 4500 is
            incurred during initial setup. Note that there is no maintenance
            cost.
          </small>
        </div>
        <div className="q">
          <article>
            As a client, how much do I pay for using Majiup platform?
          </article>
          <small>
            Majiup platform is free for use. You only pay for the amount of
            water you request.
          </small>
        </div>
        <div className="q">
          <article>
            Do I need Majiup devices to make water delivery request?
          </article>
          <small>
            No, you can make a request on our online platform,{" "}
            <Link to="https://majiup.com/request-refill">
              Majiup - Request refill
            </Link>{" "}
            .
          </small>
        </div>
        <div className="q">
          <article>
            What are the charges per liter when I use the platform?
          </article>
          <small>
            The pricing is determined by your location. Note this will change
            with different location.
          </small>
        </div>
        <div className="q">
          <article>Can I install the Majiup devices by myself?</article>
          <small>
            It is recommended that the device is installed by authorized
            technicians only.
          </small>
        </div>
        <div className="q">
          <article>Can I access the Majiup platform offline?</article>
          <small>
            The platform is accessible fully offline. For you to make an order,
            you are needed to have an active internet connection.
          </small>
        </div>
        <div className="q">
          <article>As a vendor, how do I register on the platform?</article>
          <small>
            Visit our vendor registration at{" "}
            <Link to="https://www.majiup.com/vendor-registration">
              Majiup - Registration
            </Link>{" "}
          </small>
        </div>
        <div className="q">
          <article>
            Do water vendors pay when registering on the platform?
          </article>
          <small>
            No, no one who is charged when onboarding into the platform
          </small>
        </div>
      </div>
    </div>
  );
}
