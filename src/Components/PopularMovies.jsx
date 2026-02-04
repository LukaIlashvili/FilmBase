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
        <>
        
        <div id="popularDiv">
            <h1 className="popularTitle">Popular Movies🍿</h1>
            <div id="movies">
        {movies.slice(0,6).map(movie => (
            <MovieCard key={movie.id} movie={movie} />
        ))}
        </div>
        </div>
        </>
  );
}

export default PopularMovies;