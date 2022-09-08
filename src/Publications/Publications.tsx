import React from "react";
import "./Publications.css";
import me from "../assets/me.jpeg";

interface PublicationsProps {
  source: string;
}

function Publications({ source }: PublicationsProps) {
  return (
    <div>
      <div className="Home">Hola, mi nombre es Luis Castellanos</div>
      <div className="Img">
        <img src={me} alt="Me" />
      </div>
    </div>
  );
}

export default Publications;
