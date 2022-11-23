import {
  GET_FILTER_JOKES,
  GET_ALL_JOKES,
  GET_CATEGORIES,
} from "../constants/ActionTypes";

const initialState = {
  allJokes: [],
  isFetching: true,
  categories: [],
  filterJokes: [],
  joke: null,
};

const jokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_JOKES:
      return {
        ...state,
        allJokes: action.payload,
        filterJokes: action.payload,
        isFetching: false,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case GET_FILTER_JOKES:
      if (action.payload === "all") {
        return {
          ...state,
          filterJokes: state.allJokes,
        };
      }
      if (action.payload === "uncategories") {
        return {
          ...state,
          filterJokes: state.allJokes.filter(function (el) {
            return el.categories.length === 0;
          }),
        };
      }

      return {
        ...state,
        filterJokes: state.allJokes.filter(function (el) {
          return el.categories.includes(action.payload);
        }),
      };
    case "CHOOSE_JOKE":
      return {
        ...state,
        joke: action.payload,
      };
    default:
      return state;
  }
};

export default jokeReducer;
