import PostList from "../components/PostList";

export default function JobPage() {
  const type = "job";
  return (
    <div>
      <PostList type={type} />
    </div>
  );
}
