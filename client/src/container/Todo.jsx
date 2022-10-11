import React from "react";
import TodoList from "../components/todo/TodoList";
import BaseBody from "./../components/common/BaseBody";
import Nav from "./../components/common/Nav";

const Todo = () => {
  return (
    <BaseBody>
      <Nav />
      <TodoList />
    </BaseBody>
  );
};

export default Todo;
