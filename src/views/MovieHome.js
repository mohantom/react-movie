import React, { useState, useEffect } from "react";
import { movieUrls, myAxios } from "../axios";
import MovieCard from "../components/MovieCard";

const getMovies = page => {
  // commit("SET_SPINNER", true);
  if (page <= 0) {
    return;
  }
  myAxios.get(movieUrls.popular(page)).then(res => {
    console.log("got movies: ", res.data);
  });

  // commit("ADD_MOVIES", response.data.results);
  // commit("UPDATE_CURRENT_PAGE", response.data.page);
  // commit("SET_SPINNER", false);
};

const movieHome = React.memo(props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    myAxios.get(movieUrls.popular(1)).then(res => {
      console.log("got movies: ", res.data);
      setMovies(res.data.results);
    });
  }, []);

  return (
    <div className="container">
      <div className="columns features is-multiline">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
});

export default movieHome;
