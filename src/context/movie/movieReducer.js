import { GET_MOVIES } from "../actionTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};
