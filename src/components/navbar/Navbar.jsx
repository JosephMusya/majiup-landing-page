import React, { useRef, useState } from "react";
import "./navbar.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { LiaBarsSolid } from "react-icons/lia";
import { useEffect } from "react";
import { MdOutlineClose } from "react-icons/md";
import supabase from "../../config/supabaseConfig";

// import { RiArrowDropDownLine } from 'react-icons/ri';
export const logoutUser = async () => {
  try {
    const { data, error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error);
    }
    if (data) {
      console.log("Logged out user");
    }
  } catch (error) {
    console.error(error);
  } finally {
  }
};
const Navbar = ({ user, profile }) => {
  const nav = useRef();

  const [showNav, setShowNav] = useState(false);

  const navigate = useNavigate();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nav.current && !nav.current.contains(event.target)) {
        // Clicked outside the div, hide it
        setShowNav(false);
      }
    };

    // Add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav>
      <div>
        <div className="bars">
          {showNav ? (
            <MdOutlineClose
              onClick={toggleNav}
              size={25}
              style={{ cursor: "pointer" }}
            />
          ) : (
            <LiaBarsSolid
              onClick={toggleNav}
              size={25}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        <div className={showNav ? "nav show" : "nav hidden"} ref={nav}>
          <div className="icon">
            <img src={logo} alt="logo" />
            <strong>Majiup</strong>
          </div>
          <div className="nav-elements">
            <li
              onClick={() => {
                navigate("/"), setShowNav(false);
              }}
            >
              Home
            </li>
            {/* <li href="#products">Products </li> */}
            {/* <li
              onClick={() => {
                navigate("/resources", setShowNav(false));
              }}
            >
              Resources & Docs{" "}
            </li> */}
            <li className="contacts">Contacts </li>

            <li
              onClick={() => {
                navigate("/dashboard", setShowNav(false));
              }}
              style={{ fontWeight: "bold" }}
            >
              My Account
            </li>
            {!user ? (
              <li
                onClick={() => {
                  navigate("/login", setShowNav(false));
                }}
              >
                LOGIN / SIGN UP
              </li>
            ) : (
              <li onClick={() => logoutUser()}>LOGOUT</li>
            )}
            {/* <li
              onClick={() => {
                navigate("/careers"), setShowNav(false);
              }}
            >
              Careers
            </li> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
