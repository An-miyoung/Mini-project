import axios from "axios";
import { STORY_INCREMENT } from "../constants";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";

export const getStory = async (id) => {
  try {
    const story = await axios.get(`${BASE_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    // console.log(error);
  }
};

export const getStories = async (type, page) => {
  try {
    const { data: storyIds } = await axios.get(
      `${BASE_URL}/${type}stories.json`
    );
    const start = (page - 1) * STORY_INCREMENT;
    const end = start + STORY_INCREMENT;
    const stories = await Promise.all(storyIds.slice(start, end).map(getStory));
    return stories;
  } catch (error) {
    // console.log(error);
  }
};

export const getUser = async (id) => {
  try {
    const user = await axios.get(`${BASE_URL}/user/${id}.json`);
    // console.log(user);
    return user;
  } catch (error) {
    // console.log(error);
  }
};

export const getKids = async (kids) => {
  try {
    const stories = await Promise.all(kids.map(getStory));
    // console.log(stories);
    return stories;
  } catch (error) {
    // console.log(error);
  }
};
