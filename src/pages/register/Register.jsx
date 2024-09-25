import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import supabase from "../../config/supabaseConfig";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import MultiStep from "react-multistep";

const Step1 = ({ handleNext, type, setType }) => {
  return (
    <div className="login" style={{ flexDirection: "column" }}>
      <h1>You want to register as?</h1>
      <div className="flex-row" style={{ padding: "2rem" }}>
        <button
          onClick={() => {
            setType("client");
            handleNext();
          }}
          className="select-btn"
        >
          CLIENT
        </button>
        <button
          onClick={() => {
            setType("trucker");
            handleNext();
          }}
          className="select-btn"
        >
          WATER TRUCKER
        </button>
      </div>{" "}
    </div>
  );
};

const Step2 = ({ type, handleNextStep }) => {
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [userType, setType] = useState(type);
  const [area, setArea] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const {
        data: { user, session },
        error,
      } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            name: name,
            phone: phone,
            user_type: userType,
            town: area ?? "",
          },
        },
      });

      if (user || session) {
        toast.success("Registration succesful");
        navigate("/login");
        // if (user) {
        //   toast.success("Login successful!");
        //   navigate("/dashboard");
        // }
      }

      if (error) {
        throw new Error(error.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error("ERROR: ->", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login" style={{ flexDirection: "column" }}>
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
          {type === "trucker" && (
            <div className="login-input">
              <label htmlFor="phone">Main Area of Operation</label>
              <input
                id="area"
                type="text"
                placeholder="Which is your main location of work?"
                onChange={(text) => setArea(text.target.value)}
                required
              />
            </div>
          )}

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
      <div
        className="flex-column"
        style={{
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <article>You are registering as {type}</article>
        <button
          onClick={handleNextStep}
          style={{ backgroundColor: "gray", minWidth: "5rem" }}
        >
          Click to change
        </button>
      </div>
    </div>
  );
};

export default function Register() {
  const [activeStep, setActiveStep] = useState(0);
  const [type, setType] = useState("client");

  const handleNextStep = () => {
    setActiveStep((prev) => {
      if (prev > 0) {
        return 0;
      }
      return 1;
    });
  };

  return (
    <MultiStep
      activeStep={activeStep}
      showNavigation={false}
      showTitles={false}
      stepCustomStyle={{ display: "none" }}
    >
      {activeStep === 0 ? (
        <Step1 handleNext={handleNextStep} setType={setType} type={type} />
      ) : (
        activeStep > 0 && <Step2 type={type} handleNextStep={handleNextStep} />
      )}
    </MultiStep>
  );
}
