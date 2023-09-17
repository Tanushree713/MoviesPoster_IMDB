import React from "react";
import "./Card.css";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  const movie = props.movie;
  const handleFavouriteClick = props.handleFavouriteClick;

  const [col, setColor] = useState("white");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <div className="card">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} width={200} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (

        <div className="card">
          <div className="card-img">
            {" "}
            <img
              alt="card"
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              }
            />
          </div>

          <div className="fav_icon" onClick={() => handleFavouriteClick(movie)}>
            <i
              className="fa fa-heart"
              aria-hidden="true"
              onClick={() => {
                col === "white" ? setColor("red") : setColor("white");
              }}
              style={{ color: col }}
            ></i>
          </div>

          <Link to={`/movie/${movie.id}`}>
            <div className="card-details">
              <div className="card-title">
                {movie ? movie.original_title.slice(0, 30) : ""}
              </div>
              <div className="card-info">
                {movie ? movie.release_date : ""}
                <span className="movie-ratings">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};

export default Card;
