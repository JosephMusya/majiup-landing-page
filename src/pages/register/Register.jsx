import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import supabase from "../../config/supabaseConfig";
import { useState } from "react";

export default function Register() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: name,
            phone: phone,
          },
        },
      });

      if (data) {
        console.log(data);
      }

      if (error) {
        throw new Error({ error: error });
      }
    } catch (error) {
      console.error("ERROR: ->", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login" style={{}}>
      <form action="" onSubmit={registerUser}>
        <div className="login-box">
          <div className="flex-row" style={{}}>
            <h1 style={{ fontWeight: "bold", lineHeight: 1.2 }}>
              Clean water delivery reimagined!
            </h1>
          </div>
          <div className="login-input">
            <label htmlFor="name">Name</label>
            {/* <div>
            <FaUser />
          </div> */}
            <input
              id="name"
              type="text"
              placeholder="Full Names"
              onChange={(name) => setName(name.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email@example.com"
              placeholder="email"
              onChange={(text) => setEmail(text.target.value)}
              required
            />
          </div>
          <div className="login-input">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              placeholder="0712345678"
              onChange={(text) => setPhone(text.target.value)}
              required
            />
          </div>
          {/* <div className="login-input">
          <label htmlFor="user">User Type</label>
          <select name="user" id="user">
            <option value="client">Client</option>
            <option value="trucker">Water Trucker</option>
          </select>
        </div> */}
          <div className="login-input">
            <label htmlFor="password">Password</label>
            {/* <div>
            <FaLock />
          </div> */}
            <input
              id="password"
              type="password"
              placeholder="password"
              onChange={(text) => setPassword(text.target.value)}
              required
            />
          </div>
          <div className="login-action">
            <button>{loading ? "Loading..." : "REGISTER"}</button>
          </div>
          <div>
            <article>
              Already have an account <Link to="/login">Login</Link> instead.
            </article>
          </div>
        </div>
      </form>
    </div>
  );
}
