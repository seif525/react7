import React from "react";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ movie }) => {
  const backUp =
    "https://www.kindpng.com/picc/m/18-189751_movie-placeholder-hd-png-download.png";
  const mainBackUp =
    "https://everyfad.com/static/images/movie_poster_placeholder.29ca1c87.svg";
  return (
    <div
      className="col-6 movie_card my-2"
      style={{
        backgroundImage: `linear-gradient(45deg, white, rgba(255,255,255,.7)), url(${
          movie.second_img || backUp
        })`,
      }}
    >
      <div className="left_side">
        <div className="left_side_inner">
          <img src={movie.main_img || mainBackUp} alt="movie image" />
          <div>
            <h1>{movie.title}</h1>
            <p>{movie.date}</p>
            <div className="d-flex">
              <p className="duration mr-2">{movie.duration}</p>
              <p>{movie.genre}</p>
            </div>
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={movie.rate}
            />
          </div>
        </div>
        <div>
          <p className="description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
