import React, { useEffect, useContext } from "react";
import { MovieContext } from "../context/context";
import MovieDetailsInfo from "../components/MovieDetailsInfo";

const MovieDetails = props => {
  const movieContext = useContext(MovieContext);
  const movieId = props.match.params.movieId;
  const { movieDetails, getMovieDetails, getMovieReviews } = movieContext;
  const { movie, videos, country, boxOffice, tags, extraInfo } = movieDetails;

  useEffect(() => {
    getMovieDetails(movieId);
    getMovieReviews(movieId);
  }, []);

  return (
    <div>
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="box has-background-grey-light">
              <h1 className="title is-1 has-text-centered">
                {movie.title}
                <span className="tag is-success">{movie.vote_average}</span>
              </h1>
            </div>
            <div className="columns is-multiline">
              {/* <MovieDetailsPoster
                  :posterPath="movie.poster_path"
                  :posterSize="'medium'"
                /> */}

              <div
                className="column is-7 has-vertically-aligned-content"
                data-aos="fade-right"
              >
                {/* <MovieDetailsOverview :overview="movie.overview" />
    
                  <MovieDetailsTag
                    v-for="(tagValue, tagName, index) in tags"
                    :key="index"
                    :tagName="tagName"
                    :tagValue="tagValue"
                  />
                  <br /> */}

                <div className="columns about-links">
                  {extraInfo.map(info => {
                    return (
                      <MovieDetailsInfo
                        className="column about-links"
                        key={info.heading}
                        heading={info.heading}
                        subheading={info.subheading}
                        isLink={info.isLink}
                      />
                    );
                  })}
                </div>

                {/* <div className="columns">
                    <MovieDetailsTrailers
                      v-for="video in videos"
                      :key="video.id"
                      :video="video"
                    />
                  </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="title is-2">Reviews</h1>
        {/* <div v-for="review in reviews.results" :key="review.id">
            <MovieDetailsReview :review="review" />
          </div> */}
      </div>
    </div>
  );
};

export default MovieDetails;
