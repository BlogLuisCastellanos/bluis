import React from "react";
import { getFileLink } from "../services/s3";
import "./About.css";

function About() {
  return (
    <div className="About">
      <span>You can see my CV in the following <a href={getFileLink("cv/")} target="_blank" rel="noreferrer">Link</a> </span> 
    </div>
  );
}

export default About;
