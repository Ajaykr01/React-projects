import React from "react";

function CategoryBar() {
  const categories = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Music",
    },
    {
      id: 3,
      name: "Bhojpuri cinema",
    },
    {
      id: 4,
      name: "APIs",
    },
    {
      id: 5,
      name: "Albums",
    },
    {
      id: 6,
      name: "Information Technology",
    },
    {
      id: 7,
      name: "Skills",
    },
    {
      id: 8,
      name: "T-series",
    },
    {
      id: 9,
      name: "Comedy",
    },
    {
      id: 10,
      name: "New to you",
    },
    {
      id: 11,
      name: "Podcast",
    },
    {
      id: 12,
      name: "Live",
    },
    {
      id: 13,
      name: "Gaming",
    },
  ];
  return (
    <div
      className="flex items-center gap-5 flex-nowrap whitespace-nowrap mx-5
         overflow-x-auto scroll-smooth"
    >
      {categories.map((item) => (
        <div
          key={item.id}
          className="px-3 rounded-lg my-5 h-7 bg-neutral-600 whitespace-nowrap snap-start"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default CategoryBar;
