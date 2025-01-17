import React from 'react';
import { Movie } from '../../types/movie';
import './MovieCard.css'
import { Link } from 'react-router-dom';


interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className='col-md-3 mb-4'>
      <div className="card h-100">
        <img src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/300x450?text=No+Image"
          }
          className="card-img-top h-100"
          alt={movie.title}/>
          <div className="card-body">
            <h5 className='card-title'>{movie.title}</h5>
            <p className='card-text'>Release Date: {movie.release_date || "N/A"}</p>
            <p className='card-text'>
              Rating: {movie.vote_average ? movie.vote_average : 'N/A'}/10
            </p>
            <Link to={`/movie/${movie.id}`} className='btn btn-primary btn-sm'>
              See Details
            </Link>
          </div>
      </div>
    </div>
  );
};

export default MovieCard;
