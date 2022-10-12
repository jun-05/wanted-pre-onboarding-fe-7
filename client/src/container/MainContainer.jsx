import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import { useAuth } from "../context/AuthContext";

const MainContainer = () => {
  const navigate = useNavigate();
  const { authState, signIn, signUp } = useAuth();

  useEffect(() => {
    if (authState) navigate("/todo");
  }, [authState, navigate]);

  return <SignIn signUp={signUp} signIn={signIn} />;
};

export default MainContainer;
