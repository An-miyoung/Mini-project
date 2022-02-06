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
import CardComment from "./CardComment";

// const gotoUrl = ({ url }) => {};

export default function Comments() {
  const [story, setStory] = useState({});
  const [kidList, setKidList] = useState([]);
  const { title, url, by, kids, score } = story;
  const { id } = useParams();
  const idx = Number(id);
  // console.log("back-id: ", idx);

  const type = getPosts[2];

  // const story = stories.find((post) => {
  //   return post.data.id === idx;
  // });

  const shortenUrl = (url) => {
    const splitUrl = url.split("/")[2];
    if (splitUrl.includes("www")) {
      return splitUrl.slice(4);
    } else {
      return splitUrl;
    }
  };
  // console.log("story", story);

  useEffect(() => {
    getStory(idx).then((response) => {
      const story = response.data;
      setStory(story);
      getKids(story.kids).then((posts) => {
        setKidList(posts);
      });
    });
  }, [idx]);

  // console.log("kidList: ", kidList);
  return (
    <>
      <div className={`header__comments ${type}`}>
        <div className="header__back">
          <NavLink to={`/${type}`}>
            <img src={Back} alt="backWard" />
          </NavLink>
        </div>
        <div className={`header__title ${type}`}>
          <div className="title-text">{title}</div>
          <div className="header__url">
            <div className="url__string">{url && shortenUrl(url)}</div>
            <div className="more logo__right-arrow">
              <img src={More} alt="detail" />
            </div>
          </div>
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
      <div className="content__comments">
        <div className="content__up">
          <img src={Up} alt="upWard" />
        </div>
        <div className="content__title">
          Comment ({`${kids && kids.length > 0 ? kids.length : 0}`})
        </div>
        <div className="content__inner">
          {kidList !== undefined &&
            kidList.map(({ data: post }, index) => (
              <CardComment key={index} post={post} height={200} />
            ))}
        </div>
      </div>

      {/* <Route path="comments/:id" element={<Comments />} /> */}

      {/* <Routes>
        <Route path={`/${type}/user/:by`} element={<Profile />} />
      </Routes> */}
    </>
  );
}
