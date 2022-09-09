import React from "react";
import { BlogEntry } from "../BlogPage";
import "./BlogPageDetail.css";

interface BlogPageDetailProps {
  entry: BlogEntry;
}

function BlogPageDetail({ entry }: BlogPageDetailProps) {
  return (
    <>
      <div>{entry.title}</div>
      {!entry.content && <div>{"No Content"}</div>}
      {entry.content && <div dangerouslySetInnerHTML={{"__html":entry.content}} />}
    </>
  );
}

export default BlogPageDetail;
