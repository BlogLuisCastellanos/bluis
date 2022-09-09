import React from "react";
import style from "./BlogList.module.css";
import BlogCard, { BlogLightEntry } from "./BlogCard/BlogCard";

interface BlogListProps {
  list: BlogLightEntry[];
  loading: boolean;
}

function BlogList({ list, loading }: BlogListProps) {
  return (
    // <div className="Blog">
    //   {loading && <div className="Blog">Cargando</div>}
    //   {!loading && list.map((entry) => {
    //     return <BlogCard key={entry.title} entry={entry} />;
    //   })}
    // </div>
    <div className={style.main}>
      Under construction
    </div>
  );
}

export default BlogList;
