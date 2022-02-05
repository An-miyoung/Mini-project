import { Link } from "react-router-dom";
import "../css/cardComment.css";
import { getPosts } from "../hooks/useGetPost";
import More from "../assets/images/more.png";
import Point from "../assets/images/point.png";
import Comment from "../assets/images/comment.png";

export default function CardComment({ post, height }) {
  // const { id, by, kids, score, time, title, url } = post;

  if (post !== null) {
    const { id, by, time, text } = post;
    return (
      <>
        {/* <Link to={"comments/" + id}> */}

        <Link to={"/profile/" + by}>
          <div className="content__by">{by}</div>
        </Link>
        <div
          className="content__text"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
      </>
    );
  } else return null;
}
