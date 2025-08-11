import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/pages/Card";
import Layout from "./components/Layout/Layout";
import SearchedVideos from "./components/pages/SearchedVideos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Card />} />
          <Route path="/results" element={<SearchedVideos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
