import React from "react";
import BaseBody from "../components/common/BaseBody";
import Nav from "../components/common/Nav";
import MainContainer from "../container/MainContainer";

const MainPage = () => {
  return (
    <BaseBody>
      <Nav />
      <MainContainer />
    </BaseBody>
  );
};

export default MainPage;
