import { useEffect, useState } from "react";
import { fetchPopularMovies } from "../api";
import "../App.css";
import MovieCard from "./MovieCard";


function HeroCarousel() {
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchPopularMovies().then(data => {
            setMovies(data.results.slice(0, 6));
        })
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % movies.length);
        }, 3000);

        return () => clearInterval(timer);
    }, [movies]);

    if (!movies.length) return null;

    const movie = movies[index];

    const prevSlide = () => {
        setIndex(prev => (prev === 0 ? movies.length -1 : prev - 1))
    }

    const nextSlide = () => {
        setIndex(prev => (prev === movies.length - 1 ? 0 : prev + 1))
    }

    return (
        <div className="hero" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
            <div className="heroOverlay">
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <button className="arrow left" onClick={prevSlide}>←</button>
                <button className="arrow right" onClick={nextSlide}>→</button>
            </div>
            </div>
    );
}

export default HeroCarousel;