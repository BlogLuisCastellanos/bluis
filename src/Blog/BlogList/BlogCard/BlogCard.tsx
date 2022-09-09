import React from "react";
import "./BlogCard.css";

export interface BlogLightEntry {
  desc?: string;
  image?: string;
  title: string;
  date?: Date;
}

interface BlogCardProps {
  entry: BlogLightEntry;
}

function BlogCard({ entry }: BlogCardProps) {
  return <div>{entry.title}</div>;
}

export default BlogCard;
