import React from "react";
import "./BlogCard.css";

export interface BlogLightEntry {
  desc?: string;
  image?: string;
  title: string;
}

interface BlogCardProps {
  entry: BlogLightEntry;
}

function BlogCard({ entry }: BlogCardProps) {
  return <div>{entry.desc}</div>;
}

export default BlogCard;
