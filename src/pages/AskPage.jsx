import PostList from "../components/PostList";

export default function AskPage() {
  const type = "ask";
  return (
    <div>
      <PostList type={type} />
    </div>
  );
}
