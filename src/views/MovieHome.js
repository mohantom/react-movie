import React, { useContext, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { MovieContext } from "../context/context";

const MovieHome = () => {
  const movieContext = useContext(MovieContext);
  const { currentPage, movies, getMovies } = movieContext;

  const showLoadMore = true;

  const loadMoreMovies = () => {
    getMovies(currentPage + 1);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="container">
      <div className="columns features is-multiline">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {showLoadMore && (
        <div className="container box has-text-centered">
          <div className="button is-primary" onClick={loadMoreMovies}>
            Load More
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieHome;
