import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";



function Header() {
  return (
    <div className="Header">
      <Link to="/">Luis Castellanos</Link>
      <Link to="/cv">CV</Link>
      <Link to="/working-papers">Working Papers</Link>
      <Link to="/publications">Publications</Link>
      <Link to="/blog">Blog</Link>
    </div>
  );
}

export default Header;
