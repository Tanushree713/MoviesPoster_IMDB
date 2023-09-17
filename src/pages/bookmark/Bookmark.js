import React from "react";
import "./Bookmark.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Bookmark = ({ favourite, onDelete}) => {
  const url = useLocation();
  // console.log(url.pathname);
  // console.log(favourite.length);

  // const [items, setItems] = useState(favourite);
  // console.log(items);

  const removeElement = (id) => {
    // const newItems = items.filter((ele) => ele.id !== id);
    // setItems(newItems);
    onDelete(id)
  };
  // console.log("after delelting", favourite.length, favourite)
  

  return (
    <div className="bookmark_items">
      <div className="category">
        <div className="mark"></div>
        <h2>SAVED ITEMS </h2>
      </div>
      <div className="fav-list">
        {favourite.length === 0 && (
          <div className="list_empty">
            <h1> Your wishlist is currently empty !</h1>
            <Link to="/" className="back_btn">
              Back to home page
            </Link>
          </div>
        )}

        {favourite.map((movie) => (
          <div className="card" key = {movie.id}>
            <div className="card-img">
              {" "}
              <img
                alt="card"
                src={
                  movie.backdrop_path
                    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
                }
              />{" "}
            </div>

            <div className="fav_icon">
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() => removeElement(movie.id)}
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
        ))}
      </div>
    </div>
  );
};

export default Bookmark;
