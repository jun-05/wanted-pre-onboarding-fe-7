import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact={true} element={<MainPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
