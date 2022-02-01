import useGetPost from "../hooks/useGetPost";
import Post from "./Post";
import Header from "../components/Header";
import BottomNavi from "../components/BottomNavi";
import { Route, Routes } from "react-router-dom";
import Comments from "./Comments";

export default function PostList({ type }) {
  console.log(type);

  const posts = useGetPost(type ? type : "top");

  console.log(posts);
  return (
    <div className="container">
      <Header name={type} />
      <div className="page">
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
        <Route path="comment/:id" element={<Comments />} />
      </Routes>
    </div>
  );
}
