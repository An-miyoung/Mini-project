import { useEffect, useState } from "react";
import "../css/comments.css";
import Up from "../assets/images/up_small.png";
import { useParams } from "react-router-dom";
import { getPosts } from "../hooks/useGetPost";
import { getKids } from "../utils/apis";

// 개별 아이템을 클릭했을때 코멘트가 출력되는 콤포넌트입니다.
// 이것을 어디서 어떻게 불러야 자기가 가진 내용을 갖고 다음 페이지로 연결된지
// 모르겠습니다.

export default function Comments() {
  const [kidList, setKidList] = useState([]);
  const { id } = useParams();
  // console.log(typeof id, id);

  const idx = Number(id);
  // console.log(typeof idx, idx);

  const [stories] = getPosts;

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
  return (
    <div className="container">
      <div className="header__comments">
        <div className="header__back">**</div>
        <div className="header__title">{title}</div>
        <div className="header__url">{url}</div>
        <div className="header__by">by {by}</div>
        <div className="header__more"></div>
      </div>
      <div className="content__comments">
        <div className="content__up">
          <img src={Up} alt="upWard" />
        </div>
        <div className="content__title">
          Comment
          {`${kids && kids.length > 0 ? kids.length : 0}`}
        </div>
        {kidList.map(({ data }, index) => (
          <div className="content__inner" key={index}>
            {data.text}
          </div>
        ))}
      </div>
    </div>
  );
}
