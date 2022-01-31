import { useEffect, useState } from "react";
import { getStories } from "../utils/apis";

export default function useDataFetcher(type) {
  console.log("useGetData-type: ", type);
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories(type)
      .then((posts) => {
        setStories(posts);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [type]);

  return stories;
}
