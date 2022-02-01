import "../css/card.css";
import Card from "./Card";

export default function Post({ post, type }) {
  // console.log(post);

  // const { id, by, title, kids, time, url } = post;

  return <Card post={post} height={102} />;
}
