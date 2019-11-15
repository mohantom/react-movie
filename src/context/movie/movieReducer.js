import {
  GET_MOVIES,
  GET_MOVIE_DETAILS,
  GET_MOVIE_REVIEWS
} from "../actionTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movieDetails: action.payload
      };
    case GET_MOVIE_REVIEWS:
      return {
        ...state,
        movieReviews: action.payload
      };
    default:
      return state;
  }
};
