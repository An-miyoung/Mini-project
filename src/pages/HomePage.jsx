import PostList from "../components/PostList";

export default function HomePage() {
  const type = "top";
  return (
    <div>
      <PostList type={type} />
    </div>
  );
}
