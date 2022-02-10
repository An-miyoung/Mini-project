import axios from "axios";
import { STORY_INCREMENT } from "../constants";

const BASE_URL = "https://hacker-news.firebaseio.com/v0";
let rank = 1;
export const getStory = async (id, index) => {
  try {
    const story = await axios.get(`${BASE_URL}/item/${id}.json`);
    story.data.rank = rank++;
    return story;
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

export const getUser = async (id) => {
  try {
    const user = await axios.get(`${BASE_URL}/user/${id}.json`);
    // console.log(user);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getKids = async (kids) => {
  try {
    const stories = await Promise.all(kids.map(getStory));
    // console.log(stories);
    return stories;
  } catch (error) {
    console.log(error);
  }
};

export const getSubmissions = async (user) => {
  console.log(user);
  try {
    const stories = await Promise.all(
      user.submitted.slice(0, 30).map(getStory)
    );
    return stories;
  } catch (error) {
    console.log(error);
  }
};
