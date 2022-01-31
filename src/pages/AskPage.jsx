import PostList from "../components/PostList";

export default function AskPage() {
  const type = "ask";
  return (
    <div>
      <h1>Home</h1>
      <PostList type={type} />
    </div>
  );
}
