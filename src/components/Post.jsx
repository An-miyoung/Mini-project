import { useState } from "react";
import "../css/card.css";
import Card from "./Card";

export default function Post({ post, type, rank }) {
  let height = 0;

  switch (type) {
    case "top":
      height = 102;
      break;
    case "new":
      height = 102;
      break;
    case "ask":
      height = 363;
      break;
    case "show":
      height = 180;
      break;
    case "job":
      height = 197;
      break;
    default:
      height = 102;
  }
  // rank = rank + 1;
  return <Card post={post} type={type} height={height} rank={rank} />;
}
