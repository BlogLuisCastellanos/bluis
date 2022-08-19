import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";



function Header() {
  return (
    <div className="Header">
      <Link to="/">Luis Castellanos</Link>
      <Link to="/about">About me</Link>
      <Link to="/extra">Blog</Link>
    </div>
  );
}

export default Header;
