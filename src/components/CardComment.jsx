import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../css/cardComment.css";
import { getStory, getKids } from "../utils/apis";
import { mapTime } from "../utils/mapTime";
import { getPosts } from "../hooks/useGetPost";
import More from "../assets/images/more.png";
import Point from "../assets/images/point.png";
import Comment from "../assets/images/comment.png";
import Avatar from "../assets/images/1.png";
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
  console.log(post);

  if (post !== null) {
    const { by, time, text } = post;
    console.log(post);
    console.log(post.text);
    return (
      <>
        <div className="content__header">
          <div className="profile__img">
            <img src={Avatar} alt="avatar" />
          </div>
          <div className="content__by__created">
            <Link to={"/profile/" + by}>
              <div className="content__by">{by}</div>
            </Link>
            <div className="created">
              {mapTime(time)}
              {` `}ago
            </div>
          </div>
        </div>
        <div className="content__text__more">
          {text && <div className="content__text">{cleanText(text)}</div>}
          <div className="logo more">
            <img src={More} alt="detail" />
          </div>
          <div className="line"></div>
        </div>
      </>
    );
  } else return null;
}
