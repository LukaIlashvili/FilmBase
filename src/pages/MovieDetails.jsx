import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieDetails } from "../api";
import Navbar from "../Components/Navbar";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <>
    <Navbar />
    <div>
        {movie.poster_path && (
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      )}
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Trailer:</p>
        {movie.videos && movie.videos.results.length > 0 ? (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            ></iframe>
        ) : (
          <p>No trailer available</p>
        )}
    </div>
    </>
  );
}

export default MovieDetails;
