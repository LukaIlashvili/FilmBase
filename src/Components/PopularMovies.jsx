import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api";
import "../App.css";
import MovieCard from "./MovieCard";

function PopularMovies() {
  const [movies, setMovies] = useState([]);
    useEffect(() => {
    fetchPopularMovies().then(data => setMovies(data.results));
    }, []);

    return (
        <div id="popularDiv">
        {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>
  );
}

export default PopularMovies;