import PostList from "../components/PostList";

export default function ShowPage() {
  const type = "show";
  return (
    <div>
      <PostList type={type} />
    </div>
  );
}
