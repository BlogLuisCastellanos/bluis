import React from "react";
import { getFileLink } from "../services/s3";
import style from "./About.module.css";

function About() {
  return (
    <div className={style.main}>
      <span>Interested in my CV? You can check it out in the following <a href={getFileLink("cv/")} target="_blank" rel="noreferrer">Link</a>!</span> 
    </div>
  );
}

export default About;
