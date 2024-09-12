import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className="login" style={{}}>
      <div className="login-box">
        <div className="flex-row" style={{}}>
          <h1 style={{ fontWeight: "bold", lineHeight: 1.2 }}>
            Clean water delivery reimagined!
          </h1>
        </div>
        <div className="login-input">
          <label htmlFor="username">Username</label>
          {/* <div>
            <FaUser />
          </div> */}
          <input id="username" type="text" placeholder="username" />
        </div>
        <div className="login-input">
          <label htmlFor="password">User Type</label>
          {/* <div>
            <FaLock />
          </div> */}
          <select name="user" id="user">
            <option value="client">Client</option>
            <option value="trucker">Water Trucker</option>
          </select>
        </div>
        <div className="login-input">
          <label htmlFor="password">Password</label>
          {/* <div>
            <FaLock />
          </div> */}
          <input id="username" type="password" placeholder="password" />
        </div>
        <div className="login-action">
          <button>REGISTER</button>
        </div>
        <div>
          <article>
            Already have an account <Link to="/login">Login</Link> instead.
          </article>
        </div>
      </div>
    </div>
  );
}
