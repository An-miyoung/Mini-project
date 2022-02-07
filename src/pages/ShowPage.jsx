import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "../css/ask.css";
import useGetPost, { getStoriesPage, setPage } from "../hooks/useGetPost";
import Header from "../components/Header";
import BottomNavi from "../components/BottomNavi";
import CardShow from "../components/CardShow";
import Comments from "../components/Comments";

export default function ShowPage() {
  const type = "show";
  // console.log(type);

  const posts = useGetPost(type ? type : "top");

  // console.log(posts);
  useEffect(() => {
    const divPage = document.getElementById("div-page-2");
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
      setPage(0);
      divPage.removeEventListener("scroll", divPageScroll);
    };
  }, [type]);

  return (
    <div className="container">
      <Header name={type} />
      <div className="page show" id="div-page-2">
        {posts.map(
          ({ data: post }) =>
            post && (
              <CardShow key={post.id} post={post} type={type} height="180" />
            )
        )}
      </div>

      <BottomNavi />
      <Routes>
        <Route path="comments/:id" element={<Comments />} />
      </Routes>
    </div>
  );
}
