import React from "react";
import "./App.css";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import NoMatch from "./NoMatch/NoMatch";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="not-found" element={<NoMatch />} />
        <Route path="*" element={<Navigate to="not-found" replace />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
