import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/top.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TOP_PAGE_HEIGHT, CURRENT_PAGE_HEIGHT } from "../constants";
import useGetPost, { getStoriesPage, setPage } from "../hooks/useGetPost";
import Post from "../components/Post";
import BottomNavi from "../components/BottomNavi";
import { Route, Routes } from "react-router-dom";
import Comments from "../components/Comments";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import ThreeDot from "../assets/images/3Dot.png";
import MoreL from "../assets/images/more_large.png";
import Point from "../assets/images/point2.png";
import Comment from "../assets/images/comment2.png";
import Slider from "react-slick";

export default function HomePage() {
  const type = "top";
  const clientYs = [];
  const pageMove = [];

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const posts = useGetPost(type ? type : "top");
  const top5 = posts.splice(0, 5);

  useEffect(() => {
    const topPage = document.getElementById("topPage");
    const title = document.getElementById("div-slider");

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
        if (lastMove > 0) {
          topPage.style.top = "147px";
          topPage.style.height = "659px";
          topPage.style.transition = "all 500ms ease";
          title.style.display = "none";

          if (lastMove >= TOP_PAGE_HEIGHT || lastMove >= CURRENT_PAGE_HEIGHT) {
            getStoriesPage(type);
          }
          pageMove.splice(0);
        }
      } else if (clientYs[0] < clientYs[clientYs.length - 1]) {
        pageMove.push(clientYs[clientYs.length - 1] - clientYs[0]);
        const lastMove = pageMove.reduce((r, l) => r + l, 0);
        if (lastMove > 0) {
          topPage.style.top = "545px";
          topPage.style.height = "270px";
          topPage.style.transition = "all 500ms ease";
          title.style.display = "block";
          pageMove.splice(0);
        }
      }
    };
    topPage.addEventListener("touchstart", topPageTouchStart);
    topPage.addEventListener("touchmove", topPageTouchMove);
    topPage.addEventListener("touchend", topPageTouchEnd);
    return function () {
      topPage.removeEventListener("touchstart", topPageTouchStart);
      topPage.removeEventListener("touchendmove", topPageTouchMove);
      topPage.removeEventListener("touchend", topPageTouchEnd);
    };
  });

  useEffect(() => {
    const divPage = document.getElementById("div-page");
    const divPageScroll = function (event) {
      if (
        event.target.scrollHeight <=
        Math.ceil(event.target.clientHeight + event.target.scrollTop)
      ) {
        getStoriesPage(type);
      }
    };
    divPage.addEventListener("scroll", divPageScroll);
    return function () {
      setPage(0);
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
      <div className="slider__container" id="div-slider">
        <div className="slider__title">
          <h4>Todays' TOP5</h4>
        </div>
        <Slider {...settings}>
          {top5 &&
            top5.map(({ data: post }, index) => (
              <div className="slider__item" key={index}>
                <div className="slider__box" id={index === 0 ? "first" : ""}>
                  <div className="slider__text">
                    <div
                      className="text__title"
                      id={index === 0 ? "first" : ""}
                    >
                      {post.title}
                    </div>
                    <div className="text__by" id={index === 0 ? "first" : ""}>
                      by {post.by}
                    </div>
                  </div>
                  <div className="slider__logo" id={index === 0 ? "first" : ""}>
                    <div className="logo logo__point__comment">
                      <span id={index === 0 ? "first" : ""}>
                        <img
                          src={Point}
                          alt="point"
                          style={{ width: "16px", height: "16px" }}
                        />
                      </span>
                      <span
                        style={{ marginLeft: "3px", marginRight: "12px" }}
                        id={index === 0 ? "first" : ""}
                      >
                        {post.score}
                      </span>
                      <span id={index === 0 ? "first" : ""}>
                        <img
                          src={Comment}
                          alt="comment"
                          style={{ marginLeft: "3px" }}
                        />
                      </span>
                      <span
                        style={{ marginLeft: "3px" }}
                        id={index === 0 ? "first" : ""}
                      >
                        {`${
                          post.kids && post.kids.length > 0
                            ? post.kids.length
                            : 0
                        }`}
                      </span>
                    </div>
                    <div className="more" id={index === 0 ? "first" : ""}>
                      <Link to={"comments/" + post.id}>
                        <img src={MoreL} alt="detail" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      </div>
      <div id="topPage" className="page top">
        <div className="card__title">
          <h4>Top List</h4>
        </div>
        <div className="page" id="div-page">
          {posts.map(
            ({ data: post }, index) =>
              post && (
                <Post key={post.id} post={post} type={type} rank={index + 6} />
              )
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
