import React from "react";
import { Home } from "./pages/home/home";
import { Routes, Route } from "react-router-dom";
import UseScrollTop from "./hooks/scrollTop";
const App = () => {
  return (
    <>
      <UseScrollTop />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
