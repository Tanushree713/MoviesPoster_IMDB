import React from "react";
import { useState } from "react";
import "./Header.css";

import { Link } from "react-router-dom";

const Header = ({ favourite }) => {
  const [toggle, setToggle] = useState(false);
  // console.log("from header", favourite.length);

  const showMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="header">
        <div className="header-left">
          <Link to="/">
            <img
              className="logo"
              alt="main"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            />
          </Link>
          <Link to="/movies/popular">
            {" "}
            <span> Popular </span>{" "}
          </Link>
          <Link to="/movies/top_rated">
            {" "}
            <span>Top Rated </span>
          </Link>

          <Link to="/movies/upcoming">
            {" "}
            <span> Upcoming </span>{" "}
          </Link>
        </div>

        <div className="header-right">
          {/* <h4>    Bookmarks </h4> */}
          <Link to="/bookmarks">
            {" "}
            <span> Bookmarks</span>{" "}
            <p className="count"> {favourite.length} </p>
          </Link>
        </div>
      </div>

      <div className="res_header">
        <Link to="/">
          <img
            className="logo"
            alt="header_pic"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
          />
        </Link>
        <div className="menu" onClick={showMenu}>
          <i className="fa-solid fa-bars"></i>

          {toggle && (
            <div className="dropdown">
              <ul>
                <li>
                  <Link to="/movies/popular">
                    {" "}
                    <span> Popular </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/movies/top_rated">
                    {" "}
                    <span>Top Rated </span>
                  </Link>
                </li>
                <li>
                  <Link to="/movies/upcoming">
                    {" "}
                    <span> Upcoming </span>{" "}
                  </Link>
                </li>
                <li>
                  <Link to="/bookmarks" className="res_count">
                    {" "}
                    <span> Bookmarks </span>
                    <p className="count"> {favourite.length} </p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
