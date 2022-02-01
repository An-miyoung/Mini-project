import { useEffect, useState } from "react";
import { getStories } from "../utils/apis";

let pageNumber = 0;
export const getPosts = [];
// stories, setstories 를 전역적으로 쓰기 위해 (변수라서 변하니까 배열처리)
export default function useDataFetcher(type) {
  // console.log("useGetData-type: ", type);
  const [stories, setStories] = useState([]);
  getPosts[0] = stories;
  getPosts[1] = setStories;

  useEffect(() => {
    getStoriesPage(type);
  }, [type]);

  return stories;
}

export const getStoriesPage = (type) => {
  getStories(type, ++pageNumber)
    .then((posts) => {
      const [stories, setStories] = getPosts;
      setStories(stories.concat(posts));
    })
    .catch((error) => {
      // console.log(error);
    });
};
