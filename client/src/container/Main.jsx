import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignIn from "../components/auth/SignIn";
import Nav from "../components/common/Nav";
import BaseBody from "./../components/common/BaseBody";
import { useAuthState } from "../context/AuthContext";

const Main = () => {
  const navigate = useNavigate();
  const { authState, signIn, signUp } = useAuthState();

  useEffect(() => {
    if (authState) navigate("/todo");
  }, [authState, navigate]);

  return (
    <BaseBody>
      <Nav />
      <SignIn onSignUp={signUp} onSignIn={signIn} />
    </BaseBody>
  );
};

export default Main;
