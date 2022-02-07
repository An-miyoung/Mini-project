import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/cardComment.css";
import { getStory, getKids } from "../utils/apis";
import { getPosts } from "../hooks/useGetPost";
import More from "../assets/images/more.png";
import Point from "../assets/images/point.png";
import Comment from "../assets/images/comment.png";
import { cleanText } from "../utils/cleanText";

export default function CardComment({ post, height }) {
  const [story, setStory] = useState({});
  // const [kidList, setKidList] = useState([]);
  // const { text, id, by, kids, time } = story;

  // const type = getPosts[2];

  // useEffect(() => {
  //   getStory(id).then((response) => {
  //     const story = response.data;
  //     setStory(story);
  //     getKids(story.kids).then((posts) => {
  //       setKidList(posts);
  //     });
  //   });
  // }, [id]);
  // console.log(post);

  if (post !== null) {
    const { by, time, text } = post;
    console.log(post);
    console.log(post.text);
    return (
      <>
        {/* <Link to={"comments/" + id}> */}
        <Link to={"/profile/" + by}>
          <div className="content__by">{by}</div>
        </Link>
        {text && <div className="content__text">{cleanText(text)}</div>}
      </>
    );
  } else return null;
}
