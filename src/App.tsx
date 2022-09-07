import React from "react";
import "./App.css";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import NoMatch from "./NoMatch/NoMatch";
import Papers from "./Papers/Papers";
import Publications from "./Publications/Publications";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="cv" element={<About />} />
        <Route path="working-papers" element={<Papers/>} />
        <Route path="publications" element={<Publications/>} />
        <Route path="blog/*" element={<Blog />} />
        <Route path="not-found" element={<NoMatch />} />
        <Route path="*" element={<Navigate to="not-found" replace />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
