import React from "react";
import { Link } from "react-router-dom";

function Categories() {
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
    <div className="mt-10 flex flex-wrap gap-4 justify-center">
      {categories.map((item) => (
        <Link
          key={item.id}
          to={`/category/${item.name.toLowerCase()}`}
          className="bg-blue-600 text-white rounded-md px-6 py-2 text-sm hover:bg-blue-700 transition duration-200"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Categories;
