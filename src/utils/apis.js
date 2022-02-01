import axios from "axios";
import { STORY_INCREMENT } from "../constants";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_URL}/item/${id}.json`);
    console.log(story);
    return story;
  } catch (error) {
    console.log(error);
  }
};

export const getStories = async (type) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_URL}/${type}stories.json`
    );
    console.log(storyIds);
    const stories = await Promise.all(
      storyIds.slice(0, STORY_INCREMENT).map(getStory)
    );
    return stories;
  } catch (error) {
    console.log(error);
  }
};
