import React from "react";
import "./login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div style={{ fontWeight: "bold" }} className="login">
      <div className="login-box">
        <h1>Welcome Back To Majiup</h1>
        <div className="login-input">
          <label htmlFor="username">Username</label>
          {/* <div>
            <FaUser />
          </div> */}
          <input id="username" type="text" placeholder="username" />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password</label>
          {/* <div>
            <FaLock />
          </div> */}
          <input id="password" type="password" placeholder="password" />
        </div>
        <div className="login-action">
          <button>LOGIN</button>
          {/* <div className="login-action google-login"> */}
          <button className="google-login">Continue with Google</button>
          {/* </div> */}
        </div>

        <div>
          <article>
            Don't have an account <Link to="/register">Register</Link> instead.
          </article>
        </div>
      </div>
    </div>
  );
}
