import React from "react";
import "./BlogList.css";
import BlogCard, { BlogLightEntry } from "./BlogCard/BlogCard";

interface BlogListProps {
  list: BlogLightEntry[];
}

function BlogList({ list }: BlogListProps) {
  return (
    <div className="Blog">
      {list.map((entry) => {
        return <BlogCard entry={entry} />;
      })}
    </div>
  );
}

export default BlogList;
