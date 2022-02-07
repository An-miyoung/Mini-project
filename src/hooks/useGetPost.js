import { useEffect, useState } from "react";
import { getStories } from "../utils/apis";

let pageNumber = 0;
export const getPosts = [];

export default function useDataFetcher(type) {
  const [stories, setStories] = useState([]);
  getPosts[0] = stories;
  getPosts[1] = setStories;
  getPosts[2] = type;

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
      console.log(error);
    });
};

export const setPage = (page) => {
  pageNumber = page;
  getPosts[0].splice(0);
  console.log("클린세팅시작", getPosts[0]);
};
