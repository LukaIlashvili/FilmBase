import { useEffect, useState } from "react";
import { fetchPopularMovies } from "./api";
import PopularMovies from "./Components/PopularMovies";
import "./App.css";

function App() {
  return (
  <div className="App">
      <h1>Popular Movies</h1>
      <PopularMovies />
    </div>
  );
}

export default App;
