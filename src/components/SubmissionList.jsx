import { useParams, Link } from "react-router-dom";
import Post from "../components/Post";
import Header from "./Header";
import { getSubmission } from "./Profile";
import Back from "../assets/images/back.png";

export default function SubmissionList() {
  const type = "submissions";
  const posts = getSubmission[0];
  return (
    <div className="container">
      <Header name={type} />
      <div className="page" id="div-page">
        {posts.map(
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
