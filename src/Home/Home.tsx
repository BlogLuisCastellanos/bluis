import React from "react";
import style from "./Home.module.css";
import me from "../assets/me.jpeg";

function Header() {
  return (
    <div className={style.main}>
      <div >Hello! My name is Luis Eduardo Castellanos</div>
      <div className="Img">
        <img src={me} alt="Me" />
      </div>
    </div>
  );
}

export default Header;
