import React from "react";
import "./login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import supabase from "../../config/supabaseConfig";
import { useState } from "react";
export default function Login() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (data) {
        console.log(data);
      } else if (error) {
        throw new Error(error);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  return (
    <div style={{ fontWeight: "bold" }} className="login">
      <form action="" onSubmit={loginUser}>
        <div className="login-box">
          <h1>Welcome Back To Majiup</h1>
          <div className="login-input">
            <label htmlFor="phone">Email</label>
            <input
              id="email"
              type="text"
              placeholder="0712345678"
              onChange={(text) => setEmail(text.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              onChange={(text) => setPassword(text.target.value)}
              required
            />
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
