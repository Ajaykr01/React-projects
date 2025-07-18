import { useState } from "react";
import Review from "./components/Review/Review";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewReviews from "./components/View-reviews/ViewReviews";

function App() {
  const [data, setData] = useState([]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Review data={data} setData={setData} />} />
          <Route path="/reviews" element={<ViewReviews data={data} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
