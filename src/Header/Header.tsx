import React from "react";
import style from "./Header.module.css";

import { Link, useLocation } from "react-router-dom";
import useResponsive from "../shared/hooks/useResponsive";



function Header() {
  const location = useLocation();
  const { isMobile } = useResponsive();
  return (
    <div className={isMobile ? style.mobileHeader : style.header}>
      <Link to="/"><span className={style.title}>Luis Eduardo Castellanos</span></Link>
      <Link to="/cv"><span className={location.pathname === '/cv' ? style.selected: undefined}>CV</span></Link>
      <Link to="/working-papers"><span className={location.pathname === '/working-papers' ? style.selected: undefined}>Working Papers</span></Link>
      <Link to="/publications"><span className={location.pathname === '/publications' ? style.selected: undefined}>Publications</span></Link>
      <Link to="/blog"><span className={location.pathname === '/blog' ? style.selected: undefined}>Blog</span></Link>
    </div>
  );
}

export default Header;
