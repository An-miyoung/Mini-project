import { useParams, useNavigate } from "react-router-dom";
import "../css/submissionComment.css";
import Post from "../components/Post";
import useGetUser from "../hooks/useGetUser";
import Back from "../assets/images/back.png";
import { useEffect } from "react";
import { getSubmissions } from "../utils/apis";
import { useState } from "react/cjs/react.development";

export default function SubmissionList() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);
  const type = "submissions";
  const { by } = useParams();
  const user = useGetUser(by);

  useEffect(() => {
    getSubmissions(user.data).then((posts) => {
      console.log(posts);
      setPosts(posts);
    });
  }, [user]);

  return (
    <div className="container">
      <div className="title-container submissions">
        <div className="title">
          <h1 className="inner-box submissions">SUBMISSIONS</h1>
        </div>
      </div>
      <div className="header__back">
        <img
          src={Back}
          alt="backWard"
          onClick={() => {
            navigate(-1);
            console.log("click");
          }}
        />
      </div>
      <div className={`page ${type}`} id="div-page-2">
        {posts &&
          posts.map(
            ({ data: post }) =>
              post && <Post key={post.id} post={post} type={type} />
          )}
      </div>
    </div>
  );
}
