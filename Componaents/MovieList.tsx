import React, { useEffect, useState } from 'react';
import { Movie } from '../types/movie';
import MovieCard from './MovieCardComponent/MovieCard';
import axios from 'axios';


interface MovieCardProps {
  movie: Movie;
}

const MovieList: React.FC<MovieCardProps> = () => {
 const [movies , setMovies] = useState<Movie[]>([])
 const [currentPage , setCurrentPage] = useState<number>(1)
 const [totalPages , setTotalPages] = useState<number>(1)
 const API_KEY = '1ffbfac3afc2e23a5589565dbd14c789'

 const fetchMovies = async (page = 1):Promise<void> => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`
  try {
    const response = await axios.get(url)
    setMovies(response.data.results || [])
    setTotalPages(response.data.total_pages || 1)
  } catch (error) {
    console.log("Error fetching movies" , error);
    
  }
 }

 useEffect(() => {
  fetchMovies(currentPage);
 }, [currentPage])


 const handlePageChange = (page : number) => {
  if (page >=1 && page <= totalPages) {
    setCurrentPage(page)
  }
 }

 return <>

<div className='d-flex justify-content-center align-items-center my-4'>
      <button
       className='btn btn-outline-primary me-2'
      disabled={currentPage===1}
      onClick={() => handlePageChange(currentPage - 1 )}>
        Previous
      </button>
      <span className='mx-2'>
        page {currentPage} of {totalPages}
      </span>
      <button
       className='btn btn-outline-primary me-2'
      disabled={currentPage===totalPages}
      onClick={() => handlePageChange(currentPage + 1 )}>
        Next
      </button>
    </div>
    <div className="container my-4">
      <h1 className='mb-4 text-center fw-bolder text-danger'>Top Rated Movies</h1>
      <div className="row">
        {movies.map((movie,idx) => (
          <MovieCard key={idx} movie={movie}></MovieCard>
        ))}
      </div>
    </div>
    
    <div className='d-flex justify-content-center align-items-center my-4'>
      <button
       className='btn btn-outline-primary me-2'
      disabled={currentPage===1}
      onClick={() => handlePageChange(currentPage - 1 )}>
        Previous
      </button>
      <span className='mx-2'>
        page {currentPage} of {totalPages}
      </span>
      <button
       className='btn btn-outline-primary me-2'
      disabled={currentPage===totalPages}
      onClick={() => handlePageChange(currentPage + 1 )}>
        Next
      </button>
    </div>
 </>
};

export default MovieList;
