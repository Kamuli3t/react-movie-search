import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";

function App() {
  const [movieData, setMovieData] = useState([]);
  console.log(movieData);
  return (
    <div className="app">
      <Form setMovieData={setMovieData} />
      <MovieDisplay movieData={movieData} />
    </div>
  );
}

export default App;
