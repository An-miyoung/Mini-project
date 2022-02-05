import { useEffect } from "react";
import "../css/top.css";
import { TOP_PAGE_HEIGHT } from "../constants";
import useGetPost, { getStoriesPage } from "../hooks/useGetPost";
import Post from "../components/Post";
import BottomNavi from "../components/BottomNavi";
import { Route, Routes } from "react-router-dom";
import Comments from "../components/Comments";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import ThreeDot from "../assets/images/3Dot.png";

export default function HomePage() {
  const type = "top";
  const clientYs = [];
  const pageMove = [];

  const posts = useGetPost(type ? type : "top");

  useEffect(() => {
    const topPage = document.getElementById("topPage");
    const page = document.querySelector(".page.top");
    console.log(page);
    const topPageTouchStart = function (event) {
      clientYs.splice(0);
      clientYs.push(event.touches[0].clientY);
    };
    const topPageTouchMove = function (event) {
      clientYs.push(event.touches[0].clientY);
    };
    const topPageTouchEnd = function (event) {
      if (clientYs[0] > clientYs[clientYs.length - 1]) {
        pageMove.push(clientYs[0] - clientYs[clientYs.length - 1]);
        const lastMove = pageMove.reduce((r, l) => r + l, 0);
        if (lastMove >= TOP_PAGE_HEIGHT) {
          getStoriesPage(type);
          topPage.style.top = "147px";
          topPage.style.height = "659px";
          topPage.style.transition = "all 500ms ease";
          pageMove.splice(0);
        }
        console.log("업 슬라이딩: ", lastMove);
      } else if (clientYs[0] < clientYs[clientYs.length - 1]) {
        pageMove.push(clientYs[clientYs.length - 1] - clientYs[0]);
        const lastMove = pageMove.reduce((r, l) => r + l, 0);
        if (lastMove > 0) {
          topPage.style.top = "545px";
          topPage.style.height = "270px";
          topPage.style.transition = "all 500ms ease";
          pageMove.splice(0);
        }
        console.log("업 슬라이딩: ", lastMove);
      }
    };
    topPage.addEventListener("touchstart", topPageTouchStart);
    topPage.addEventListener("touchmove", topPageTouchMove);
    topPage.addEventListener("touchend", topPageTouchEnd);
    return function () {
      console.log("터치 종료");
      topPage.removeEventListener("touchstart", topPageTouchStart);
      topPage.removeEventListener("touchendmove", topPageTouchMove);
      topPage.removeEventListener("touchend", topPageTouchEnd);
    };
  }, []);

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
      <div className="header top">
        <div className="title-container">
          <div className="title">
            <h1>TOP</h1>
          </div>
          <NavLink to="/about" className="footer inner-box top">
            <div className="logo">
              <img src={Logo} alt="detail" />
            </div>
            <div className="space"></div>
            <div className="dots">
              <img src={ThreeDot} alt="detail" />
            </div>
          </NavLink>
        </div>
      </div>
      <div className="slider__container">
        <div className="slider__title">
          <h4>Todays' TOP5</h4>
        </div>
      </div>
      <div id="topPage" className="page top">
        <div className="card__title" style={{ marginLeft: "23px" }}>
          <h4>Top List</h4>
        </div>
        <div className="page" id="div-page">
          {posts.map(
            ({ data: post }) =>
              post && <Post key={post.id} post={post} type={type} />
          )}
        </div>
      </div>
      <BottomNavi />
      <Routes>
        <Route path="comments/:id" element={<Comments />} />
      </Routes>
    </div>
  );
}
