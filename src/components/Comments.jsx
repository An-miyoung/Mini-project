import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/comments.css";
import Up from "../assets/images/up_small.png";
import More from "../assets/images/more.png";
import Back from "../assets/images/back.png";
import Point from "../assets/images/point.png";
import Comment from "../assets/images/comment.png";
import { useParams } from "react-router-dom";
import { getPosts } from "../hooks/useGetPost";
import { getStory, getKids } from "../utils/apis";
import { shortenUrl } from "../utils/shortenUrl";
import CardComment from "./CardComment";

export default function Comments() {
  const [story, setStory] = useState({});
  const [kidList, setKidList] = useState([]);
  const [clicked, setClicked] = useState(false);
  const { title, url, by, kids, score } = story;

  const { id } = useParams();
  const idx = Number(id);
  console.log("comments-params: ", idx);

  const type = getPosts[2];

  useEffect(() => {
    getStory(idx).then((response) => {
      const story = response.data;
      setStory(story);
      getKids(story.kids).then((posts) => {
        setKidList(posts);
      });
    });
  }, [idx]);

  function verticalSlide() {
    const page = document.getElementById("slide-comment");
    if (clicked) {
      page.style.top = "442px";
      page.style.height = "454px";
    } else {
      page.style.top = "147px";
      page.style.height = "749px";
    }
    setClicked(!clicked);
  }

  return (
    <>
      <div className={`header__comments ${type}`}>
        <div className="header__back">
          <NavLink to={`/${type}`}>
            <img src={Back} alt="backWard" />
          </NavLink>
        </div>
        <div className={`header__title ${type}`}>
          <div className="title-text">
            {url ? (
              <span
                onClick={() => {
                  window.open(url);
                }}
              >
                {title}
              </span>
            ) : (
              <span>{title}</span>
            )}
          </div>
          {url && (
            <div
              className="header__url"
              onClick={() => {
                window.open(url);
              }}
            >
              <div className="url__string">{url && shortenUrl(url)}</div>
              <div className="more logo__right-arrow">
                <img src={More} alt="detail" />
              </div>
            </div>
          )}
        </div>
        <div className="header__by__logo">
          <div className="header__by">by {by}</div>
          <div className="logo logo__point__comment">
            <span>
              <img
                src={Point}
                alt="point"
                style={{ width: "16px", height: "16px" }}
              />
            </span>
            <span style={{ marginLeft: "3px", marginRight: "12px" }}>
              {score}
            </span>
            <span>
              <img src={Comment} alt="comment" style={{ marginLeft: "3px" }} />
            </span>
            <span style={{ marginLeft: "3px" }}>
              {`${kids && kids.length > 0 ? kids.length : 0}`}
            </span>
          </div>
        </div>
        <div className="header__more"></div>
      </div>
      <div className="content__comments" id="slide-comment">
        <div className="content__up" onClick={verticalSlide}>
          <img src={Up} alt="upWard" />
        </div>
        <div className="content__title">
          Comment ({`${kids && kids.length > 0 ? kids.length : 0}`})
        </div>
        <div className="content__inner">
          {kidList !== undefined ? (
            kidList.map(({ data: post }, index) => (
              <CardComment key={post.id} post={post} height={200} />
            ))
          ) : (
            <div className="noComment">no comment....</div>
          )}
        </div>
      </div>
    </>
  );
}
