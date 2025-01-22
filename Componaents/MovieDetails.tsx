import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetailsProps from "../types/MovieDetailsProps";
import axios from "axios";

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailsProps | null>(null);
  const API_KEY = "1ffbfac3afc2e23a5589565dbd14c789";

  const fetchMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      );
      setMovie(response.data);
    } catch (error) {
      console.error("Error fetching movie details", error);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div className="container mt-5">Loading movie details..</div>;
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.title}
              className="img-fluid"
            />
          </div>
          <div className="col-md-8">
            <h2>{movie.title}</h2>
            <p>
              <strong>Release Date:</strong> {movie.release_date || "N/A"}
            </p>
            <p>
              <strong>Rating:</strong> {movie.vote_average}/10
            </p>
            <p>
              <strong>Geners:</strong>{" "}
              {movie.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>{movie.overview}</p>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.title}
              className="img-fluid my-5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
