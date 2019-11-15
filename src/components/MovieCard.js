import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

const basePosterUrl = "http://image.tmdb.org/t/p/w185/";

const movieCard = React.memo(({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div>
        <div className="card column">
          <div className="card-image">
            <figure className="image is-6by3">
              <img src={basePosterUrl + movie.poster_path} alt="poster" />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <div className="title is-5">
                  <span>{movie.title}</span>
                  <div className="tag has-addon">
                    <span className="tag is-info">{movie.vote_average}</span>
                    <span className="tag">{movie.release_date}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="content">{movie.overview}</div>
          </div>
        </div>
      </div>
    </Link>
  );
});

export default movieCard;
