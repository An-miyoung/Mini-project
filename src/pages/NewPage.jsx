import PostList from "../components/PostList";

export default function NewPage() {
  const type = "new";
  return (
    <div>
      <PostList type={type} />
    </div>
  );
}
