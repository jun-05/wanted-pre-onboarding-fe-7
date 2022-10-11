import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import { useAuthState } from "../context/AuthContext";

const Main = () => {
  const navigate = useNavigate();
  const { authState, signIn, signUp } = useAuthState();

  useEffect(() => {
    if (authState) navigate("/todo");
  }, [authState, navigate]);

  return <SignIn onSignUp={signUp} onSignIn={signIn} />;
};

export default Main;
