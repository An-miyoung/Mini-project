import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../css/job.css";
import Up from "../assets/images/up_small.png";
import useGetPost, { getStoriesPage } from "../hooks/useGetPost";
import Header from "../components/Header";
import BottomNavi from "../components/BottomNavi";
import JobList from "../components/JobList";

export default function JobPage() {
  const type = "job";
  // console.log(type);

  const posts = useGetPost(type ? type : "top");

  // console.log(posts);
  useEffect(() => {
    const divPage = document.getElementById("div-page");
    const divPageScroll = function (event) {
      if (
        event.target.scrollHeight <=
        event.target.clientHeight + event.target.scrollTop
      ) {
        getStoriesPage(type);
      }
    };
    divPage.addEventListener("scroll", divPageScroll);
    return function () {
      divPage.removeEventListener("scroll", divPageScroll);
    };
  }, [type]);

  return (
    <div className="container">
      <Header name={type} />
      <div className={`page ${type}`}>
        <div className="content__up">
          <img src={Up} alt="upWard" />
        </div>
        <div className="card__title">
          <h4>ALL</h4>
        </div>
        <div className="page-slider" id="div-page">
          <div className="card">
            {posts.map(
              ({ data: post }) =>
                post && <JobList key={post.id} post={post} type={type} />
            )}
          </div>
        </div>
      </div>
      <BottomNavi />
      {/* 클릭하면 세부사항으로 라우팅 */}
      {/* <Routes>
        <Route path="comments/:id" element={<Comments />} />
      </Routes> */}
    </div>
  );
}
