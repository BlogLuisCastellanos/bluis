import React, { useEffect, useState } from "react";
import "./Publications.css";
import PublicationsList from "../shared/PublicationsList/PublicationsList";
import { listPublications } from "../services/s3";
import { Publication } from "../shared/PublicationsList/Publication/Publication";

interface PublicationsProps {
  folder: string;
}

function Publications({ folder }: PublicationsProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<Publication[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      setLoading(true);
      setList(await listPublications(folder));
      setLoading(false);
    };
    fetchEntries();
  }, [folder]);

  return (
    <div>
      {loading && <div>Cargando</div>}
      {!loading && <PublicationsList list={list} />}
    </div>
  );
}

export default Publications;
