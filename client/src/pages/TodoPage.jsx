import React from "react";
import BaseBody from "../components/common/BaseBody";
import Nav from "../components/common/Nav";
import TodoContainer from "./../container/TodoContainer";

const TodoPage = () => {
  return (
    <BaseBody>
      <Nav />
      <TodoContainer />
    </BaseBody>
  );
};

export default TodoPage;
