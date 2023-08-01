import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?s=batman&apikey=a0afac21`)
      .then((res) => res.json())
      .then((data) => setMovies(data.Search));
  }, []);

  return (
    <>
      <div className="poster">
        {Movies.map((movie) => (
          <Link
            style={{ textDecoration: "none", color: "white" }}
            src={`{movie.Poster}`}
            to={`/movie/${movie.imdbID}`}>
            <div className="posterImage">
              <img src={`${movie ? movie.Poster : ""}`} alt='movie' ></img>
            </div>

            <div className="posterImage__title">{movie ? movie.Title : ""}</div>
            <div className="posterImage__runtime">
              Year: {movie ? movie.Year : ""}
              </div>
              <div>
              <span className="posterImage__type">
               Category: {movie ? movie.Type : ""}
              </span>

              <div className="posterImage__description">
              imdbID: {movie ? movie.imdbID : ""}
              </div>
            </div>
          </Link>
        ))}


        {/* <MovieList /> */}
      </div>
    </>
    
  );
};

export default Home;
