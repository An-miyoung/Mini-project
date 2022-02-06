import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "../css/job.css";
import Up from "../assets/images/up_small.png";
import useGetPost, { getStoriesPage } from "../hooks/useGetPost";
import Header from "../components/Header";
import BottomNavi from "../components/BottomNavi";
import CardJob from "../components/CardJob";

export default function JobPage() {
  const type = "job";
  const [clicked, setClicked] = useState(false);
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
      }
    };
    divPage.addEventListener("scroll", divPageScroll);
    return function () {
      divPage.removeEventListener("scroll", divPageScroll);
    };
  }, [type]);

  function UpSlide() {
    const page = document.getElementById("div-page");
    if (clicked) {
      page.style.top = "442px";
      page.style.height = "364px";
    } else {
      page.style.top = "147px";
      page.style.height = "659px";
    }
    setClicked(!clicked);
  }

  return (
    <div className="container">
      <Header name={type} />
      <div className={`page ${type}`} id="div-page">
        <div className="content__up" onClick={UpSlide}>
          <img src={Up} alt="upWard" />
        </div>
        <div className="card__title">
          <h4>ALL</h4>
        </div>
        <div className="page-slider" id="div-page">
          <div className="card">
            {posts.map(
              ({ data: post }) =>
                post && <CardJob key={post.id} post={post} type={type} />
            )}
          </div>
        </div>
      </div>
      <BottomNavi />
    </div>
  );
}
