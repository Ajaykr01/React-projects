import React from "react";
import { Link, useParams } from "react-router-dom";
import API from "../../API/API";
import Categories from "./Categories";

const categoryMap = {
  bollywood: { language: "hi" },
  hollywood: { language: "en" },
  action: { genreId: 28 },
  bangali: { language: "bn" },
  telugu: { language: "te" },
  chinese: { language: "zh" },
  gujarati: { language: "gu" },
  hindi: { language: "hi" },
  korean: { language: "ko" },
  marathi: { language: "mr" },
  punjabi: { language: "pa" },
  tamil: { language: "ta" },
  "web-series": { type: "tv", language: "hi", genreId: 18 },
  "tv-show": { type: "tv", language: "hi", genreId: 10764 },
};

function CategoryPage() {
  const { categoryName } = useParams();
  const apiParams = categoryMap[categoryName] || {};
  const { data, loading, error } = API({
    type: apiParams.type || "category",
    ...apiParams,
  });
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {<Categories />}
      <div className="px-20 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {data.map((item) => (
          <div key={item.id}>
            <Link to={`/movie/${item.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
                className="w-full h-auto hover:scale-95 transition rounded-md shadow-md"
              />
            </Link>
            <p className="text-center mt-2">{item.title || item.name}</p>
            <p className="mt-2 text-center text-sm font-medium">
              {item.release_date || item.first_air_date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
