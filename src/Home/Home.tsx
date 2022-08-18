import React from "react";
import "./Home.css";
import me from "../assets/me.jpeg";

function Header() {
  return (
    <div>
      <div className="Home">Hola, mi nombre es Luis Castellanos</div>
      <div className="Img">
        <img src={me} alt="Me" />
      </div>
    </div>
  );
}

export default Header;
