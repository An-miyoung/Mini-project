import useDataFetcher from "../hooks/useGetPost";
import Story from "./Post";
import { useParams } from "react-router-dom";

export default function ShowStories({ type }) {
  // const { type } = useParams();
  console.log(type);

  const stories = useDataFetcher(type ? type : "topstories.json");
  console.log(stories);
  return (
    <div>
      {stories.map(({ data: story }) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
}
