import React from "react";
import "./BlogList.css";
import BlogCard, { BlogLightEntry } from "./BlogCard/BlogCard";

interface BlogListProps {
  list: BlogLightEntry[];
  loading: boolean;
}

function BlogList({ list, loading }: BlogListProps) {
  return (
    <div className="Blog">
      {loading && <div className="Blog">Cargando</div>}
      {!loading && list.map((entry) => {
        return <BlogCard key={entry.title} entry={entry} />;
      })}
    </div>
  );
}

export default BlogList;
