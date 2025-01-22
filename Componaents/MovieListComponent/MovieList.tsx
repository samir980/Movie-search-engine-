import React, { useEffect, useState } from "react";
import { Movie } from "../../types/movie";
import MovieCard from "../MovieCardComponent/MovieCard";
import axios from "axios";
import './MovieList.css'
import  Pagintion  from '../Pagination'
import Pagination from "../Pagination";

interface MovieCardProps {
  movie: Movie;
}

const MovieList: React.FC<MovieCardProps> = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const API_KEY = "1ffbfac3afc2e23a5589565dbd14c789";

  const fetchMovies = async (page = 1): Promise<void> => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=${page}`;
    try {
      const response = await axios.get(url);
      setMovies(response.data.results || []);
      setTotalPages(response.data.total_pages || 1);
    } catch (error) {
      console.log("Error fetching movies", error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  };

  

  return (
    <>
    
      <div className="container my-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-4  fw-bold">
              Most complete movie information search engine
            </h1>
          </div>
          <div className="col-md-6">
            <p className="fw-bold header-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar erat in arcu tempor bibendum. Donec molestie quam ligula, et blandit diam scelerisque at. Cras quis auctor dui.
                              
                    Phasellus aliquet dictum nulla ac scelerisque. Quisque convallis orci ac convallis venenatis. Nullam volutpat et nisi nec pulvinar. Pellentesque nulla tortor, auctor at accumsan ac, blandit ornare est. Aliquam eget faucibus tellus.</p>
          </div>
        </div>
        <div className="row">
        {loading
        ? [...Array(8)].map((_, index) => <MovieCard key={index} movie={null} loading={true} />)
        : movies.map((movie) => <MovieCard key={movie.id} movie={movie} loading={false} />)}
        </div>
      </div>

      {movies.length > 0 && (
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          />
      )}
    </>
  );
};

export default MovieList;
