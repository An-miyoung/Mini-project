import { useEffect, useState } from "react";
import { getStories } from "../utils/apis";

export const getPosts = [];
// stories, setstories 를 전역적으로 쓰기 위해 (변수라서 변하니까 배열처리)
export default function useDataFetcher(type) {
  // console.log("useGetData-type: ", type);
  const [stories, setStories] = useState([]);
  getPosts[0] = stories;
  getPosts[1] = setStories;

  useEffect(() => {
    getStories(type)
      .then((posts) => {
        setStories(posts);
      })
      .catch((error) => {
        // console.log(error);
      });
  }, [type]);

  return stories;
}
