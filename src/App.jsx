import { useEffect, useState } from "react";
import { fetchPopularMovies } from "./api";
import PopularMovies from "./Components/PopularMovies";
import Navbar from "./Components/Navbar";
import HeroCarousel from "./Components/HeroCarousel";
import "./App.css";

function App() {
  return (
  <div className="App">
    <Navbar />
    <HeroCarousel />
    <PopularMovies />
    </div>
  );
}

export default App;
