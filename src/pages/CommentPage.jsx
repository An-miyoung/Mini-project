import { useParams } from "react-router-dom";
import Comments from "../components/Comments.jsx";

export default function CommentPage() {
  const { id } = useParams();
  return (
    <div>
      <Comments type={id} />
    </div>
  );
}
