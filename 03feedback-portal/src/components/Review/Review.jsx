import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Review({ data, setData }) {
  const [rating, setRating] = useState(0);
  const [file, setFile] = useState(null);
  const [review, setReview] = useState("");
  const navigate = useNavigate();

  function formSubmitHandler(e) {
    e.preventDefault();
    const formData = {
      img: file,
      review: review,
      rating: rating,
    };
    setData([...data, formData]);
    alert("Form submitted successfully");
    console.log(formData);
    navigate("/reviews");

    setRating(0);
    setFile(null);
    setReview("");

    e.target.reset();
  }

  return (
    <div className="container flex items-center justify-center w-screen h-screen">
      <div className="bg-white w-[30rem]  flex flex-col items-center rounded-md">
        <h1 className="text-center pt-5 text-3xl font-bold">Write a review</h1>
        <form onSubmit={formSubmitHandler}>
          <div className="py-6 flex flex-col gap-5 ">
            <p className="text-xl">Add Photo</p>
            <input
              type="file"
              className="bg-gray-500 px-5 py-5 w-64"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div className="py-5">
            <p className="text-2xl mb-5">Write your Review</p>
            <textarea
              className="px-2 py-3 bg-zinc-300 w-80 h-40 rounded-md"
              placeholder="What's your review about this product"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </div>
          <div>
            <h1 className="text-2xl">Rating</h1>
            <div className="flex gap-2 py-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-3xl cursor-pointer ${
                    star <= rating ? "text-yellow-500" : "text-gray-500"
                  }`}
                  onClick={() => setRating(star)}
                  role="button"
                  aria-label={`Rate ${star} start${star > 1 ? "s" : ""}`}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <button className="bg-blue-500 text-white my-5 px-2 py-3 w-80 cursor-pointer">
            Submit review
          </button>
        </form>
      </div>
    </div>
  );
}

export default Review;
