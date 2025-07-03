import React from "react";
import API from "../API";
import { useNavigate } from "react-router-dom";

function Card() {
  const { data, loading } = API();
  const navigate = useNavigate();

  return (
    <div>
      <h1>📝Vlog Viewer</h1>
      {loading && <p className="loading">Loading...</p>}

      <div className="card-container">
        {data.map((item) => (
          <div className="card" key={item.id}>
            <h1 className="vlog-title">📝{item.title}</h1>
            <p className="vlog-body">{item.body}</p>
            <button onClick={() => navigate(`/view-card/${item.id}`)}>
              See vlog
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
