import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEntryByTitle } from "../../services/s3";
import { BlogLightEntry } from "../BlogList/BlogCard/BlogCard";
import "./BlogPage.css";
import BlogPageDetail from "./BlogPageDetail/BlogPageDetail";

export interface BlogEntry extends BlogLightEntry {
  background?: string;
  content?: string;
}

function BlogPage() {
  const { title } = useParams();

  const [entry, setEntry] = useState<BlogEntry>();
  const [loading, setLoading] = useState<boolean>(false);
  const getEntry = async (title: string | undefined) => {
    setLoading(true);
    if (title) {
      setEntry(await getEntryByTitle(title));
      setLoading(false);
    }
  };
  useEffect(() => {
    getEntry(title);
  }, [title]);

  return (
    <>
      {loading && <div>Cargando</div>}
      {!loading && entry && <BlogPageDetail entry={entry}/>}
    </>
  );
}

export default BlogPage;
