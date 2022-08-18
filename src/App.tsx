import React from "react";
import "./App.css";

import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import Extra from "./Extra/Extra";
import NoMatch from "./NoMatch/NoMatch";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="extra" element={<Extra />} />
        <Route path="not-found" element={<NoMatch />} />
        <Route path="*" element={<Navigate to="not-found" replace />} />
      </Routes>
      <Outlet />
    </>
  );
}

export default App;
