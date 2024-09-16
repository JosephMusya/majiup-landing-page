import React from "react";
import "./login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import supabase from "../../config/supabaseConfig";
export default function Login() {
  const loginUser = async (e) => {
    e.preventDefault();
    // let { data, error } = await supabase.auth.signinw({
    //   provider: "google",
    // });
  };
  return (
    <div style={{ fontWeight: "bold" }} className="login">
      <form action="" onSubmit={loginUser}>
        <div className="login-box">
          <h1>Welcome Back To Majiup</h1>
          <div className="login-input">
            <label htmlFor="phone">Phone</label>
            {/* <div>
            <FaUser />
          </div> */}
            <input id="phone" type="text" placeholder="phone number" />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password</label>
            {/* <div>
            <FaLock />
          </div> */}
            <input id="password" type="password" placeholder="password" />
          </div>
          <div className="login-action">
            <button type="submit">LOGIN</button>
            {/* <article style={{ textAlign: "center" }}>OR</article>
          <button className="google-login">Continue with Google</button> */}
          </div>

          <div>
            <article>
              Don't have an account <Link to="/register">Register</Link>{" "}
              instead.
            </article>
          </div>
        </div>
      </form>
    </div>
  );
}
