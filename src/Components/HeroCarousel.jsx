import { useEffect, useState, useRef } from "react";
import { fetchPopularMovies } from "../api";
import "../App.css";



function HeroCarousel() {
    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(0);
    const IntervalRef = useRef(null);

    const startAutoPlay = () => {
        IntervalRef.current = setInterval(() => {
            setIndex(prev => (prev + 1) % movies.length);
        }, 3000);
    }

    const stopAutoPlay = () => {
        if (IntervalRef.current) {
            clearInterval(IntervalRef.current);
        }}

    useEffect(() => {
        fetchPopularMovies().then(data => {
            setMovies(data.results.slice(0, 6));
        })
    }, []);

    useEffect(() => {
        if (!movies.length) return;
        startAutoPlay();
        return () => stopAutoPlay();
    }, [movies]);

     

    if (!movies.length) return null;

    const movie = movies[index];

    const prevSlide = () => {
        stopAutoPlay();
        setIndex(prev => (prev === 0 ? movies.length -1 : prev - 1))
        startAutoPlay();
    }

    const nextSlide = () => {
        stopAutoPlay();
        setIndex(prev => (prev === movies.length - 1 ? 0 : prev + 1))
        startAutoPlay();
    }

    return (
        <div className="hero" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`}}>
            <div className="heroOverlay">
                <h1>{movie.title}</h1>
                <p>Rating: {movie.vote_average}</p>
                <button className="arrow left" onClick={prevSlide}>←</button>
                <button className="arrow right" onClick={nextSlide}>→</button>
            </div>
            </div>
    );
}

export default HeroCarousel;