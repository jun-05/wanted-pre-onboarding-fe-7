import React from "react";
import BaseBody from "../components/common/BaseBody";
import Nav from "../components/common/Nav";
import Todo from "../container/Todo";

const TodoPage = () => {
  return (
    <BaseBody>
      <Nav />
      <Todo />
    </BaseBody>
  );
};

export default TodoPage;
