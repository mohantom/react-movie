import React, { useReducer } from "react";
import axios, { movieUrls } from "../axios";
import MovieContext from "./movieContext";
import MovieReducer from "./movieReducer";
import { GET_MOVIES } from "./actionTypes";

const MovieState = props => {
  const initialState = {
    movies: []
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  const getMovies = async page => {
    if (page <= 0) {
      return;
    }
    const res = await axios.get(movieUrls.popular(page));
    console.log("got movies: ", res.data);
    dispatch({ type: GET_MOVIES, payload: res.data.results });
  };

  return (
    <MovieContext.Provider value={{ movies: state.movies, getMovies }}>
      {props.children}
    </MovieContext.Provider>
  );
}

export default MovieState;
