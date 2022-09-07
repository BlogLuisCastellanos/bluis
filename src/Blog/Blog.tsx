import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { listEntries } from "../services/s3";
import "./Blog.css";
import { BlogLightEntry } from "./BlogList/BlogCard/BlogCard";
import BlogList from "./BlogList/BlogList";
import BlogPage from "./BlogPage/BlogPage";



function Blog() {
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<BlogLightEntry[]>([]);

  const fetchEntries = async () => {
    setLoading(true);
    setList(await listEntries());
    setLoading(false);
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  return (
    <>
      <Routes>
        <Route path=":title" element={<BlogPage />} />
      </Routes>
      {loading && <div className="Blog">Cargando</div>}
      {!loading && (
        <div className="Blog">
          <BlogList list={list} />
        </div>
      )}
    </>
  );
}

export default Blog;
