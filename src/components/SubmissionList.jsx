import { useParams, Link } from "react-router-dom";
import Post from "../components/Post";
import Header from "./Header";
import useGetUser from "../hooks/useGetUser";
import Back from "../assets/images/back.png";
import { useEffect } from "react";
import { getSubmissions } from "../utils/apis";
import { useState } from "react/cjs/react.development";

export default function SubmissionList() {
  const [posts, setPosts] = useState(null);
  const type = "submissions";
  const { by } = useParams();
  const user = useGetUser(by);
  console.log(user);

  useEffect(() => {
    getSubmissions(user.data).then((posts) => {
      console.log("1번??");
      console.log(posts);
      setPosts(posts);
    });
  }, [user]);

  return (
    <div className="container">
      <Header name={type} />
      <div className="page" id="div-page">
        {posts &&
          posts.map(
            ({ data: post }) =>
              post && <Post key={post.id} post={post} type={type} />
          )}
      </div>
      {/* <div className="header__back float">
        <img src={Back} alt="backWard" />
      </div> */}
      {/* <Routes>
            <Route path="comments/:id" element={<Comments />} />
          </Routes> */}
    </div>
  );
}
