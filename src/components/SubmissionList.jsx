import { useParams, Link, Routes, Route, useNavigate } from "react-router-dom";
import Post from "../components/Post";
import Header from "./Header";
import useGetUser from "../hooks/useGetUser";
import Back from "../assets/images/back.png";
import { useEffect } from "react";
import { getSubmissions } from "../utils/apis";
import { useState } from "react/cjs/react.development";
import BottomNavi from "./BottomNavi";
import Comments from "./Comments";

export default function SubmissionList() {
  const navigate = useNavigate();
  console.log(navigate);
  const [posts, setPosts] = useState(null);
  const type = "submissions";
  const { by } = useParams();
  const user = useGetUser(by);
  console.log(user);

  useEffect(() => {
    getSubmissions(user.data).then((posts) => {
      console.log(posts);
      setPosts(posts);
    });
  }, [user]);

  return (
    <div className="container">
      <div className="header__back submissions">
        <img
          src={Back}
          alt="backWard"
          onClick={() => {
            navigate(-1);
          }}
        />
      </div>
      <Header name={type} />
      <div className={`page ${type}`} id="div-page-2">
        {posts &&
          posts.map(
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
