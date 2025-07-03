import React from "react";
import { useParams } from "react-router-dom";
import API from "../API";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function ViewCard() {
  const { id } = useParams();
  const { data, loading } = API();
  const navigate = useNavigate();

  if (loading) return <p className="loading">Loading...</p>;

  const post = data.find((item) => item.id === Number(id));

  if (!post) return <p>Post not found.</p>;

  return (
    <div>
      <button
        style={{ marginLeft: -1200, marginBottom: 20 }}
        onClick={() => navigate("/")}
      >
        {" "}
        <IoMdArrowRoundBack style={{ alignItems: "center" }} />
        Back
      </button>
      <div className="card">
        <h1 className="vlog-title">📝{post.title}</h1>
        <p className="vlog-body">{post.body}</p>
      </div>
    </div>
  );
}

export default ViewCard;
