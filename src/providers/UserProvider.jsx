import { useContext } from "react";
import { createContext } from "react";
import supabase from "../config/supabaseConfig";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
export const UserContext = createContext();

export const UserProvider = (props) => {
  const [authUser, setAuthUser] = useState();
  const [profile, setProfile] = useState();
  const [loadingUser, setLoadingUser] = useState(true);

  const authChange = () => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setAuthUser(session.user);
      } else if (event === "SIGNED_OUT") {
        setAuthUser(null);
      } else if (event === "USER_UPDATED") {
        setAuthUser(session.user);
      }
    });
  };

  const getUserProfile = async (authUser) => {
    try {
      const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", authUser.id)
        .single();
      setProfile(profile);
      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingUser(false);
    }
  };

  const getUserData = async () => {
    setLoadingUser(true);
    try {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();

      if (user) {
        getUserProfile(user);
      } else {
        setLoadingUser(false);
      }
    } finally {
      // setLoadingUser(false);
    }
  };

  const updateProfile = (data) => {
    setProfile((prev) => ({
      ...prev,
      name: data?.name,
      phone: data?.phone,
      town: data?.town,
    }));
  };

  useEffect(() => {
    authChange();

    return () => {};
  }, []);

  useEffect(() => {
    if (authUser && !profile) {
      getUserData();
    }
  }, [authUser]);

  return (
    <UserContext.Provider
      value={{ authUser, loadingUser, profile, updateProfile }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  return useContext(UserContext);
}
