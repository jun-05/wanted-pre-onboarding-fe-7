import React from "react";
import SignIn from "../components/auth/SignIn";
import Nav from "../components/common/Nav";
import BaseBody from "./../components/common/BaseBody";

const Main = () => {
  return (
    <BaseBody>
      <Nav />
      <SignIn />
    </BaseBody>
  );
};

export default Main;
