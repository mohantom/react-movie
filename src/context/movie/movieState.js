import React, { useReducer } from "react";
import _ from "lodash";
import axios, { movieUrls } from "../../axios";
import { MovieContext } from "../context";
import MovieReducer from "./movieReducer";
import {
  GET_MOVIES,
  GET_MOVIE_DETAILS,
  GET_MOVIE_REVIEWS
} from "../actionTypes";

const MovieState = props => {
  const initialState = {
    movies: [],
    movieDetails: {
      movie: {},
      videos: [],
      tags: {},
      extraInfo: []
    },
    movieReviews: []
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

  const getMovieDetails = async movieId => {
    const response = await axios.get(movieUrls.details(movieId));

    const movie = response.data;
    const videos = _.filter(movie.videos.results, {
      site: "YouTube",
      type: "Trailer"
    });

    const country = _.chain(movie.production_countries)
      .map("name")
      .join(", ")
      .value();

    const boxOffice =
      movie.budget / 1000000 + "M/" + movie.revenue / 1000000 + "M";

    const tags = {
      TagLine: movie.tagline,
      Released: movie.release_date,
      Runtime: movie.runtime + " min",
      Genres: _.chain(movie.genres)
        .map("name")
        .join(", ")
        .value()
    };

    const extraInfo = [
      { heading: "Country", subheading: country, isLink: false },
      { heading: "Budget / Revenue", subheading: boxOffice, isLink: false },
      {
        heading: movieUrls.imdbLink(movie.imdb_id),
        subheading: "",
        isLink: true
      }
    ];

    console.log(movie);
    dispatch({
      type: GET_MOVIE_DETAILS,
      payload: { movie, videos, tags, extraInfo }
    });
  };

  const getMovieReviews = async movieId => {
    const response = await axios.get(movieUrls.review(movieId));
    const reviews = response.data.results;

    console.log(reviews);
    dispatch({ type: GET_MOVIE_REVIEWS, payload: reviews });
  };

  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        movieDetails: state.movieDetails,
        movieReviews: state.movieReviews,
        getMovies,
        getMovieDetails,
        getMovieReviews
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;
