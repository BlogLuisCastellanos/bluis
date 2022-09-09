import React from "react";
import "./Publication.css";

export interface Publication {
  file: string;
  desc?: string;
  image: string;
  title: string;
}

interface PublicationProps {
  publication: Publication;
}

function PublicationComponent({publication}: PublicationProps) {
  return (
    <div>
      <div className="Home">{publication.title}</div>
      <div className="Home">{publication.file}</div>
      <div className="Home">{publication.image}</div>
      <div className="Home">{publication.desc ?? '(No description)'}</div>
    </div>
  );
}

export default PublicationComponent;
