import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
    return (
      <Link to={`/movie/${movie.id}`}>
    <div className="movieCard">
      <img className="movieCardImg"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <div className="overlay">
        <h4>{movie.title}</h4>
        <h6>Rating:⭐{movie.vote_average}</h6>
      </div>
    </div>
    </Link>
  );
}

export default MovieCard;