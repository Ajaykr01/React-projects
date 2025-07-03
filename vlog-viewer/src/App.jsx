import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./components/Card";
import ViewCard from "./components/ViewCard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/view-card/:id" element={<ViewCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
