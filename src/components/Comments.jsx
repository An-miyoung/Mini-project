import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/comments.css";
import Up from "../assets/images/up_small.png";
import More from "../assets/images/more.png";
import Back from "../assets/images/back.png";
import { useParams } from "react-router-dom";
import { getPosts } from "../hooks/useGetPost";
import { getKids } from "../utils/apis";
import CardComment from "./CardComment";

// 개별 아이템을 클릭했을때 코멘트가 출력되는 콤포넌트입니다.
// 이것을 어디서 어떻게 불러야 자기가 가진 내용을 갖고 다음 페이지로 연결된지
// 모르겠습니다.

// const gotoUrl = ({ url }) => {};

export default function Comments() {
  const [kidList, setKidList] = useState([]);
  const { id } = useParams();
  // console.log(typeof id, id);

  const idx = Number(id);
  // console.log(typeof idx, idx);

  const [stories] = getPosts;
  const type = getPosts[2];

  const story = stories.find((post) => {
    // console.log("post.data.id : ", post.data.id);
    // console.log("id : ", idx);
    return post.data.id === idx;
  });
  // console.log("story", story);
  const { title, url, by, kids } = story.data;
  useEffect(() => {
    getKids(kids).then((posts) => {
      setKidList(posts);
    });
  }, [kids]);

  console.log("kidList: ", kidList);
  return (
    <>
      <div className="header__comments">
        <div className="header__back">
          <NavLink to={type}>
            <img src={Back} alt="backWard" />
          </NavLink>
        </div>
        <div className="header__title">{title}</div>
        <div className="header__url">
          <span className="url__string">{url && url.split("/")[2]}</span>
          <div className="more logo__right-arrow">
            <img src={More} alt="detail" />
          </div>
        </div>
        <div className="header__by">
          by {by}
          {/* <div className="logo logo__point__comment">
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
            </span> */}
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
    </>
  );
}
