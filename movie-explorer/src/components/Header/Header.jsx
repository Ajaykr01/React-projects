import React, { useState } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import API from "../../API/API";

function Header() {
  const [value, setValue] = useState("");
  const { data } = API({ type: "search", query: value });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-gray-700 sticky z-10 top-0 text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2 text-2xl font-bold">
        <RiMovie2Line className="text-yellow-400 text-3xl" />
        <span>MoviesHub</span>
      </div>

      <ul className="flex gap-6 text-lg font-medium">
        <li>
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/category/bollywood"
            className="hover:text-yellow-300 transition"
          >
            Bollywood
          </Link>
        </li>
        <li>
          <Link
            to="/category/web-series"
            className="hover:text-yellow-300 transition"
          >
            Web Series
          </Link>
        </li>
        <li>
          <Link
            to="/category/tv-show"
            className="hover:text-yellow-300 transition"
          >
            TV Show
          </Link>
        </li>
      </ul>

      <form onSubmit={handleSubmit}>
        <div className="flex items-center bg-gray-600 px-3 py-1 rounded-md">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm px-2 text-white placeholder:text-gray-300"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <FaSearch
            className="text-white cursor-pointer"
            onClick={handleSubmit}
          />
        </div>
      </form>

      {value && data && data.length > 0 && (
        <div className="absolute bg-white text-black rounded shadow-lg w-[227px] max-h-96 overflow-y-auto right-6 top-11">
          <ul>
            {data.map((item) => (
              <li key={item.id} className="px-4 py-2 border-b last:border-b-0">
                <h1>{item.title}</h1>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
