import { useEffect } from "react";
import useGetPost, { getStoriesPage, setPage } from "../hooks/useGetPost";
import Post from "./Post";
import Header from "../components/Header";
import BottomNavi from "../components/BottomNavi";
import { Route, Routes } from "react-router-dom";
import Comments from "./Comments";

export default function PostList({ type }) {
  const posts = useGetPost(type ? type : "top");

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
      <div className={`page ${type}`} id="div-page-2">
        {type === "top" && (
          <div className="card__title">
            <h4>Top List</h4>
          </div>
        )}
        {posts.map(
          ({ data: post }) =>
            post && <Post key={post.id} post={post} type={type} />
        )}
      </div>
      <BottomNavi />
      <Routes>
        <Route path="comments/:id" element={<Comments />} />
      </Routes>
    </div>
  );
}
