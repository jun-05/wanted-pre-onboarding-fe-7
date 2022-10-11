import React from "react";
import BaseBody from "../components/common/BaseBody";
import Nav from "../components/common/Nav";
import Main from "../container/Main";

const MainPage = () => {
  return (
    <BaseBody>
      <Nav />
      <Main />
    </BaseBody>
  );
};

export default MainPage;
