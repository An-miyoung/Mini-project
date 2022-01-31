import PostList from "../components/PostList";

export default function ShowPage() {
  const type = "Show";
  return (
    <div>
      <PostList url={type} />
    </div>
  );
}
