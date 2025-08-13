import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/pages/Card";
import Layout from "./components/Layout/Layout";
import SearchedVideos from "./components/pages/SearchedVideos";
import CategoryPage from "./components/CategoryBar/CategoryPage";
import Shorts from "./components/pages/Shorts";
import Subscribers from "./components/pages/Subscribers";
import You from "./components/pages/You";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Card />} />
          <Route path="/results" element={<SearchedVideos />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/you" element={<You />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
