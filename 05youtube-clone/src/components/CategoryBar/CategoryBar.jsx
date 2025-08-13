import React from "react";
import { NavLink } from "react-router";

function CategoryBar() {
  const categories = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Bhojpuri cinema",
    },
    {
      id: 3,
      name: "APIs",
    },
    {
      id: 4,
      name: "Albums",
    },
    {
      id: 5,
      name: "Information Technology",
    },
    {
      id: 6,
      name: "Skills",
    },
    {
      id: 7,
      name: "T-series",
    },
    {
      id: 8,
      name: "Comedy",
    },
    {
      id: 9,
      name: "New to you",
    },
    {
      id: 10,
      name: "Podcast",
    },
    {
      id: 11,
      name: "Live",
    },
    {
      id: 12,
      name: "Gaming",
    },
  ];
  return (
    <div
      className="flex items-center gap-5 flex-nowrap whitespace-nowrap mx-5
         overflow-x-auto scroll-smooth custom-scrollbar"
    >
      {categories.map((item) => (
        <NavLink
          key={item.id}
          to={`/category/${item.name}`}
          className={({ isActive }) =>
            `px-3 h-7 my-4 rounded-lg flex items-center whitespace-nowrap snap-start ${
              isActive ? "bg-white text-black" : "bg-neutral-600"
            }`
          }
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default CategoryBar;
