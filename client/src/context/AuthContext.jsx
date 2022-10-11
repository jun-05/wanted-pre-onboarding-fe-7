import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as authAPI from "../api/auth";
import { client } from "../api/client";

const setToken = (jwt) => {
  localStorage.setItem("token", jwt);
  client.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
};

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(false);
  const navigate = useNavigate();

  const state = {
    authState,
    signIn: async (user) => {
      const res = await authAPI.signIn(user);
      if (res.status === 200) {
        const jwt = res.data.access_token;
        setToken(jwt);
        setAuthState(true);
        navigate("/todo");
      }
    },
    signUp: async (user) => {
      const res = await authAPI.signUp(user);
      if (res.status === 201) {
        const jwt = res.data.access_token;
        setToken(jwt);
        setAuthState(true);
        navigate("/todo");
      }
    },
    signOut: () => {
      localStorage.setItem("token", "");
      client.defaults.headers.common["Authorization"] = "";
      setAuthState(false);
    },
    tempLogin: () => {
      setAuthState(true);
      const jwt = localStorage.getItem("token");
      setToken(jwt);
    },
  };
  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>;
}

export function useAuthState() {
  const context = useContext(AuthContext);
  return context;
}
