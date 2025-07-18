import React from "react";
import { useNavigate } from "react-router-dom";

function ViewReviews({ data }) {
  const navigate = useNavigate();
  function goToHome() {
    navigate("/");
  }
  return (
    <div className="flex items-center  flex-col h-screen w-screen">
      <h2 className="text-white text-3xl mt-10">All Reviews</h2>
      <div className="w-full px-3 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((review, id) => (
            <div
              key={id}
              className="flex flex-col gap-2 mb-5 p-4 border rounded-lg shadow bg-white"
            >
              <div className="flex items-center gap-5 mb-2">
                {review.img && (
                  <img
                    src={URL.createObjectURL(review.img)}
                    alt="user-profile"
                    width={100}
                    className="rounded-4xl"
                  />
                )}
                <h1 className="font-bold">Ajay Kumar</h1>
              </div>
              <div className="px-3 py-3">
                {[...Array(review.rating)].map((i) => (
                  <span key={i} className="text-2xl text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
              <p className="mt-2">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={goToHome}
        className="bg-blue-500 px-3 py-3 mt-5 w-85 rounded-md cursor-pointer"
      >
        Write a review
      </button>
    </div>
  );
}

export default ViewReviews;
