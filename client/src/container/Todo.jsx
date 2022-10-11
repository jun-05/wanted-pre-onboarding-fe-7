import React, { useEffect } from "react";
import TodoList from "../components/todo/TodoList";
import BaseBody from "./../components/common/BaseBody";
import Nav from "./../components/common/Nav";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../context/AuthContext";

const Todo = () => {
  const navigate = useNavigate();
  const { authState } = useAuthState();

  useEffect(() => {
    if (!authState) navigate("/");
  }, [authState, navigate]);

  return (
    <BaseBody>
      <Nav />
      <TodoList />
    </BaseBody>
  );
};

export default Todo;
