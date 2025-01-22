import React from "react";
import { Movie } from "../../types/movie";
import "./MovieCard.css";
import { Link } from "react-router-dom";
import { RatingStar } from "rating-star";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface MovieCardProps {
  movie: Movie | null;
  loading : boolean
}

const truncateTitle = (title: string | undefined, maxLegnth: number ) => {
  if (!title) return "";
  return title.length > maxLegnth ? `${title.substring(0, maxLegnth)}...` : title;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, loading }) => {
  const [rating, setRating] = React.useState(0)

  const onRatingChange = (score: number) => {
    setRating(score);
  };
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card h-100">
        {loading ? (
          <Skeleton height={400} />
        ) : (
          <div
              className="movie-poster"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie?.poster_path})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "400px",
              }}
            />
        )}
        <div className="card-body">
          <h5 className="card-title fw-bold">
            {loading ? <Skeleton width="80%" /> : truncateTitle(movie?.title, 20)}
            </h5>
          <p className="card-text">
            Release Date: {loading ?<Skeleton width="50%" /> : movie?.release_date || "N/A"}
          </p>
          <p className="card-text">
            {loading ? <Skeleton width="80%" /> : 
            <RatingStar
              clickable
              maxScore={10}
              id={`${movie?.id}`}
              rating={movie?.vote_average}
              onRatingChange={onRatingChange}
            />
            }
          </p>
          {loading ? <Skeleton width="100%" /> :
          <button className="btn-details btn text-white w-100 ">
          <Link to={`/movie/${movie?.id}`} className="btn-details btn fw-bold w-100 text-decoration-none" >
            See Details
          </Link>
          </button>
          }
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
