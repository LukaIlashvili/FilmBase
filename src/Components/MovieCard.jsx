import React from "react";
import "../App.css";

function MovieCard({ movie }) {
    return (
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
  );
}

export default MovieCard;