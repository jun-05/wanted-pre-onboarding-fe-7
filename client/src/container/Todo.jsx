import React, { useEffect, useState } from "react";
import TodoList from "../components/todo/TodoList";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "../context/AuthContext";
import * as todoAPI from "../api/todo";

const Todo = () => {
  const navigate = useNavigate();
  const { authState } = useAuthState();

  useEffect(() => {
    if (!authState) navigate("/");
  }, [authState, navigate]);

  useEffect(() => {
    getTodos();
  }, []);

  const [todos, setTodos] = useState([]);

  const createTodo = async (todo) => {
    const res = await todoAPI.createTodo(todo);
    const data = res.data;
    if (res.status === 201) {
      setTodos((todos) => todos.concat(data));
    }
  };

  const getTodos = async () => {
    const res = await todoAPI.getTodos();
    const data = res.data;
    setTodos(data);
  };

  const updateTodo = async (item, object) => {
    const res = await todoAPI.updateTodo(item, object);
    const data = res.data;
    if (res.status === 200)
      setTodos((todos) =>
        todos.map((item) => (item.id === data.id ? data : item))
      );
  };

  const deleteTodo = async (todoId) => {
    const res = await todoAPI.deleteTodo(todoId);
    console.log(res);
    if (res.status === 204) {
      setTodos((todos) => todos.filter((item) => item.id !== todoId));
    }
  };

  return (
    <TodoList
      todos={todos}
      createTodo={createTodo}
      updateTodo={updateTodo}
      deleteTodo={deleteTodo}
    />
  );
};

export default Todo;
