import React from "react";
import "../App.css";

function MovieCard({ movie }) {
    return (
    <div id="movieCard">
      <img id="movieCardImg"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
        <h3>{movie.title}</h3>
    </div>
  );
}

export default MovieCard;