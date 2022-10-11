import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useAuthState } from "./context/AuthContext";
import MainPage from "./pages/MainPage";
import TodoPage from "./pages/TodoPage";

function App() {
  const { tempLogin } = useAuthState();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      tempLogin();
    }
  }, [tempLogin]);

  return (
    <Routes>
      <Route path="/" exact={true} element={<MainPage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
