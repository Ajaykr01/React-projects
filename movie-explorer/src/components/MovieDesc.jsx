import React, { useEffect, useState } from "react";
import Categories from "./Categories/Categories";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useParams } from "react-router-dom";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

function MovieDesc() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
      );

      const data = await res.json();
      setMovie(data);
      setLoading(false);
    }
    fetchMovies();
  }, [id]);

  return (
    <>
      <Header />
      <Categories />
      <div className="flex flex-col items-center px-4 py-8 min-h-[60vh]">
        {loading && <p className="text-2xl text-center my-10">Loading...</p>}
        {movie && (
          <div className="w-full max-w-4xl flex flex-col md:flex gap-8 items-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-60 h-auto rounded-md mb-4 md:mb-0"
            />
            <div className="flex-1">
              <h1 className="text-4xl md:text-3xl font-bold mb-4">
                {movie.title}
              </h1>
              <p className="mb-4 text-gray-300">{movie.overview}</p>
              <div className="flex flex-wrap gap-4 text-md">
                <span>
                  <strong>Release Date: </strong> {movie.release_date}
                </span>
                <span>
                  <strong>Rating:</strong> {movie.vote_average}
                </span>
                {movie.runtime && (
                  <span>
                    <strong>Runtime:</strong> {movie.runtime} min
                  </span>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default MovieDesc;
