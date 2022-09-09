import React from "react";
import "./PublicationsList.css";
import PublicationComponent, { Publication } from "./Publication/Publication";

interface PublicationsListProps {
  list: Publication[];
}

function Publications({ list }: PublicationsListProps) {
  return (
    <div className="Blog">
      {list.map((publication) => {
        return <PublicationComponent key={publication.title} publication={publication}  />;
      })}
    </div>
  );
}

export default Publications;
