import React from "react";
import API from "../../API/API";
import Categories from "../Categories/Categories";
import { Link } from "react-router-dom";

function Home() {
  const { data, error, loading } = API();

  return (
    <>
      <Categories />
      <div>
        {loading && <p className="text-5xl text-center mt-40">Loading...</p>}
        {error && <p>Something went wrong!</p>}
        <div className="px-20 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {data.map((item) => (
            <div key={item.id} className="w-full">
              <Link to={`/movie/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-auto hover:scale-95 transition rounded-md shadow-md"
                />
              </Link>
              <p className="text-center mt-2">{item.release_date}</p>
              <p className="mt-2 text-center text-sm font-medium">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
