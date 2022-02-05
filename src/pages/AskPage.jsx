import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import useGetPost, { getStoriesPage } from "../hooks/useGetPost";
import Header from "../components/Header";
import BottomNavi from "../components/BottomNavi";
import Post from "../components/Post";
import Comments from "../components/Comments";

export default function AskPage() {
  const type = "ask";
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
      divPage.removeEventListener("scroll", divPageScroll);
    };
  }, [type]);

  return (
    <div className="container">
      <Header name={type} />
      <div className="page ask" id="div-page-2">
        {/* height 를 직접주고 Card 를 바로 부르도록 수정할것 */}
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
