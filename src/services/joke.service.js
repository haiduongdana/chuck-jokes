import axios from "axios";

const API_URL = "https://api.chucknorris.io/jokes";

const getJokes = (input = "all") => {
  return axios.get(API_URL + "/search", {
    params: {
      query: input,
    },
  });
};

const getCategories = () => {
  return axios.get(API_URL + "/categories");
};

const JokeService = {
  getJokes,
  getCategories,
};

export default JokeService;
