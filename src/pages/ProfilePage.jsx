import { useParams } from "react-router-dom";
import Profile from "../components/Profile.jsx";

export default function ProfilePage() {
  const { by } = useParams();
  return (
    <div>
      <Profile type={by} />
    </div>
  );
}
