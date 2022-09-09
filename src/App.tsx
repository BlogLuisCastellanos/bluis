import React from "react";
import "./App.css";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import NoMatch from "./NoMatch/NoMatch";
import Publications from "./Publications/Publications";

function App() {
  const folders = ["working-papers", "publications"]
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="cv" element={<About />} />
        {folders.map((folder)=>{
          return <Route
          key={folder}
          path={folder}
          element={<Publications folder={folder} />}
        />
        })}
        <Route path="blog/*" element={<Blog />} />
        <Route path="not-found" element={<NoMatch />} />
        <Route path="*" element={<Navigate to="not-found" replace />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
