import { useParams } from "react-router-dom";

export default function Profile() {
  const { by } = useParams();
  console.log("by: ", by);
  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
}
