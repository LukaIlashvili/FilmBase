import PopularMovies from "./PopularMovies";
import React from "react";
import Navbar from "./Navbar";
import HeroCarousel from "./HeroCarousel";
import "../App.css";

function Home() {
  return (
  <div className="App">
    <Navbar />
    <HeroCarousel />
    <PopularMovies />
    </div>
  );
}

export default Home;
