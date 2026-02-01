import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api";
import "../App.css";

function PopularMovies() {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
    fetchPopularMovies().then(data => setMovies(data.results));
    }, []);
    return (
    <div id="popularDiv">
      {movies.map(movie => (
        <div key={movie.id} style={{ width: "150px" }}>
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "100%" }}
          />
            <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}
export default PopularMovies;