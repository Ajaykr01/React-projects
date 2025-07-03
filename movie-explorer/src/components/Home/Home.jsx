import React from "react";
import API from "../../API/API";
import { Link } from "react-router-dom";

function Home() {
  const { data, error, loading } = API();
  const categories = [
    {
      id: 1,
      name: "BANGALI",
    },
    {
      id: 2,
      name: "TELUGU",
    },
    {
      id: 3,
      name: "CHINESE",
    },
    {
      id: 4,
      name: "GUJARATI",
    },
    {
      id: 5,
      name: "HINDI",
    },
    {
      id: 6,
      name: "HOLLYWOOD",
    },
    {
      id: 7,
      name: "KOREAN",
    },
    {
      id: 8,
      name: "MARATHI",
    },
    {
      id: 9,
      name: "PUNJABI",
    },
    {
      id: 10,
      name: "TAMIL",
    },
  ];

  return (
    <>
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        {categories.map((item) => (
          <Link
            key={item.id}
            to={`/categories/${item.name.toLowerCase()}`}
            className="bg-blue-600 text-white rounded-md px-6 py-2 text-sm hover:bg-blue-700 transition duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div>
        {loading && <p className="text-5xl text-center mt-40">Loading...</p>}
        {error && <p>Something went wrong!</p>}
        <div className="px-20 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {data.map((item) => (
            <div key={item.id} className="w-full">
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt="poster"
                className="w-full h-auto hover:scale-95 transition rounded-md shadow-md"
              />
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
