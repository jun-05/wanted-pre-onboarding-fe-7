import { client } from "./client";

export const createTodo = (todo) => client.post("/todos", { todo });

export const getTodos = () => client.get("/todos");

export const updateTodo = (item, object) => {
  const key = Object.keys(object)[0].toString();
  const updateType = object[key];
  return client.put(`/todos/${item.id}`, {
    todo: item.todo,
    isCompleted: item.isCompleted,
    [updateType]: object.data,
  });
};

export const deleteTodo = (todoId) => client.delete(`/todos/${todoId}`);
