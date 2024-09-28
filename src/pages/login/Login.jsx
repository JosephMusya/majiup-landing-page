import React from "react";
import "./login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import supabase from "../../config/supabaseConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  const [phone, setPhone] = useState("");
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      let {
        data: { user, session },
        error,
      } = await supabase.auth.signInWithPassword({
        email: loginCredentials?.email,
        password: loginCredentials?.password,
      });
      if (user && session) {
        toast.success("Login successful");
        navigate("/dashboard");
        // console.log(data);
      } else if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(error?.message);
      console.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ fontWeight: "bold" }} className="login">
      <form
        action=""
        onSubmit={(e) => {
          if (!loading) {
            loginUser(e);
          } else {
            e.preventDefault();
          }
        }}
      >
        <div className="login-box">
          <h1>Welcome Back To Majiup</h1>
          <div className="login-input">
            <label htmlFor="phone">Email</label>
            <input
              id="email"
              type="text"
              placeholder="0712345678"
              onChange={(text) =>
                setLoginCredentials((prev) => ({
                  ...prev,
                  email: text.target.value,
                }))
              }
              required
            />
          </div>
          <div className="login-input">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="password"
              onChange={(text) =>
                setLoginCredentials((prev) => ({
                  ...prev,
                  password: text.target.value,
                }))
              }
              required
            />
          </div>
          <div className="login-action">
            <button type="submit">{loading ? "Loading..." : "LOGIN"}</button>
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
