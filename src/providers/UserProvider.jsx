import { useContext } from "react";
import { createContext } from "react";
import supabase from "../config/supabaseConfig";
import { useEffect } from "react";
import { useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [authUser, setAuthUser] = useState();
  const [profile, setProfile] = useState({});
  const [loadingUser, setLoadingUser] = useState(true);

  const authChange = () => {
    console.log("Loading auth user");
    supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setAuthUser(session.user);
      } else {
        setAuthUser(null);
      }
    });
  };

  const getUserProfile = async (authUser) => {
    console.log("Getting user profile for ", authUser?.id);
  };

  const getUserData = () => {};

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <UserContext.Provider value={{ authUser, loadingUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
