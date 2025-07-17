import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import CategoryPage from "./components/Categories/CategoryPage";
import MovieDesc from "./components/MovieDesc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
        </Route>
        <Route path="/movie/:id" element={<MovieDesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
