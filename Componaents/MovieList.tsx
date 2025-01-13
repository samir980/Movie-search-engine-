import React, { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import MovieCard from './MovieCardComponent/MovieCard';
import axios from 'axios';


interface MovieCardProps {
  movie: Movie;
}

const MovieList: React.FC<MovieCardProps> = () => {
 const [movies , setMovies] = useState([])
//  const API_KEY = '1ffbfac3afc2e23a5589565dbd14c789'

 const fetchMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=1ffbfac3afc2e23a5589565dbd14c789'
  try {
    const response = await axios.get(url)
    setMovies(response.data.results || [])
  } catch (error) {
    console.log("Error fetching movies" , error);
    
  }
 }

 useEffect(() => {
  fetchMovies();
 }, [])

 return <>
    <div className="container my-4">
      <h1 className='mb-4 text-center fw-bolder text-danger'>Top Rated Movies</h1>
      <div className="row">
        {movies.map((movie,idx) => (
          <MovieCard key={idx} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
 </>
};

export default MovieList;
