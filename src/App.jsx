import React from "react";
import MovieDetails from "./pages/MovieDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movie/:id" element={<MovieDetails />} />
    </Routes>
    </div>
  );
}

export default App;
