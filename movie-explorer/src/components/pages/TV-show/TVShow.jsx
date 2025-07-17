import React from "react";
import API from "../../../API/API";
import Categories from "../../Categories/Categories";

function TVShow() {
  const { data, loading, error } = API({
    type: "tv",
    genreId: 10759,
    language: "hi",
  });

  return (
    <div>
      {loading && <p className="text-5xl text-center mt-40">Loading...</p>}
      {error && <p>{error}</p>}
      <Categories />
      <ul>
        <div className="px-20 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {data.map((item) => (
            <div key={item.id} className="w-full">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="poster"
                className="w-full h-auto hover:scale-95 transition rounded-md shadow-md"
              />
              <p className="text-center mt-2">{item.first_air_date}</p>
              <p className="mt-2 text-center text-sm font-medium">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default TVShow;
