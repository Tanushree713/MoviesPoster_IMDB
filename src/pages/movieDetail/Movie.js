import React, { useState, useEffect } from "react";
import "./Movie.css";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    getData();
    // window.scrollTo(0,0)
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovieDetail(data));
  };

  // console.log(movieDetail);

  return (
    <>
      <div className="movie_detail" key={movieDetail.id}>
        <div className="movie-intro">
          <img
            alt="poster"
            src={
              movieDetail.backdrop_path
                ? `https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`
                : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            }
          />
        </div>

        <div className="movie-info">
          <div className="left">
            <img
              alt="poster"
              src={
                movieDetail.poster_path
                  ? `https://image.tmdb.org/t/p/original${movieDetail.poster_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
              }
            />
          </div>

          <div className="right">
            <h1 className="movie__name">
              {movieDetail ? movieDetail.original_title : ""}
            </h1>
            <div className="movie__tagline">
              {movieDetail ? movieDetail.tagline : ""}
            </div>
            <div className="movie__rating">
              {movieDetail ? movieDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie__voteCount">
                {movieDetail ? "(" + movieDetail.vote_count + ") votes" : ""}
              </span>
            </div>
            <div className="movie__runtime">
              {movieDetail ? movieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate">
              {movieDetail ? "Release date: " + movieDetail.release_date : ""}
            </div>
            <div className="movie__genres">
              {movieDetail && movieDetail.genres
                ? movieDetail.genres.map((genre) => (
                    <>
                      <span className="movie__genre" id={genre.id}>
                        {genre.name}
                      </span>
                    </>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>

      <div className="synopsis" key={movieDetail.imdb_id}>
        <div className="des">
          <h2> Synopsis </h2>
          <p className="movie__description">
            {movieDetail ? movieDetail.overview : ""}
          </p>
        </div>

        <div className="production">
          <h2>Productions</h2>
          <div className="movie__prod">
            {movieDetail && movieDetail.production_companies
              ? movieDetail.production_companies.map((company) => (
                  <>
                    <span className="prod_company" id={company.id}>
                      {company.name}
                    </span>
                  </>
                ))
              : ""}
          </div>
        </div>

        <div className="movie__links">
          <h2 className="movie__heading">Useful Links</h2>
          {movieDetail && movieDetail.homepage && (
            <a
              href={movieDetail.homepage}
              target="_blank"
              rel = "noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="movie__homeButton movie__Button">
                  Homepage <i className="newTab fas fa-external-link-alt"></i>
                </span>
              </p>
            </a>
          )}
          {movieDetail && movieDetail.imdb_id && (
            <a
              href={"https://www.imdb.com/title/" + movieDetail.imdb_id}
              target="_blank"
              rel = "noreferrer"
              style={{ textDecoration: "none" }}
            >
              <p>
                <span className="movie__imdbButton movie__Button">
                  IMDb<i className="newTab fas fa-external-link-alt"></i>
                </span>
              </p>
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default Movie;
