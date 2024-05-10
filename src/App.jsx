import React from "react";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Contact } from "./pages/contact/contact";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Projects } from "./pages/projects/projects";
import UseScrollTop from "./hooks/scrollTop";
const App = () => {
  return (
    <>
      <UseScrollTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
