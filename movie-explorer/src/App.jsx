import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/home/Home";
import Bollywood from "./components/pages/Bollywood/Bollywood";
import WebSeries from "./components/pages/Web-series/WebSeries";
import TVShow from "./components/pages/TV-show/TVShow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/category/bollywood" element={<Bollywood />} />
          <Route path="/category/web-series" element={<WebSeries />} />
          <Route path="/category/tv-show" element={<TVShow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
