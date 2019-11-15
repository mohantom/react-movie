import React, { useContext, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import MovieContext from "../context/movieContext";

const MovieHome = () => {
  const movieContext = useContext(MovieContext);
  // const { movies, getMovies } = movieContext;

  useEffect(() => {
    movieContext.getMovies();
  }, []);

  return (
    <div className="container">
      <div className="columns features is-multiline">
        {movieContext.movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieHome;
