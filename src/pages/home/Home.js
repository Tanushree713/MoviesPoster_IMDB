import { React, useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import MovieList from "../../Components/movieList/MovieList";

const Home = (params) => {
  const handleFavouriteClick = params.handleFavouriteClick;

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  // console.log(popularMovies);

  return (
    <div>
      <div className="poster_main">
        <Carousel
          autoPlay={true}
          showThumbs={false}
          transitionTime={1}
          infiniteLoop={true}
          showStatus={true}
        >
          {popularMovies.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              <div className="movie" key={movie.original_title}>
                <div className="movie-img">
                  <img
                    alt={movie.original_title}
                    src={
                      movie.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                        : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                    }
                  />
                </div>
                <div className="posterDetails">
                  <div className="movie-title">
                    {movie ? movie.original_title : ""}
                  </div>
                  <div className="movie-details">
                    {movie ? movie.release_date : ""}
                    <span className="movie-ratings">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="movie-description">
                    {movie ? movie.overview : ""}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>

      <MovieList handleFavouriteClick={handleFavouriteClick} />
    </div>
  );
};

export default Home;
