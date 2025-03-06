import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import MovieDisplay from "./components/MovieDisplay";
import { Box } from "@mui/material";
import axiosOMDbAPI from "./api/axiosOMDbAPI";

function App() {
  const [movieData, setMovieData] = useState(null);
  console.log(movieData);

  useEffect(() => {
    axiosOMDbAPI("", {
      params: {
        t: "hello",
      },
    })
      .then((res) => setMovieData(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Box
      sx={{
        width: "45vw",
        margin: "2rem auto",
        gap: "2rem",
        display: "flex",
        flexDirection: "column",
      }}
      className="app"
    >
      <Form setMovieData={setMovieData} />
      <MovieDisplay movieData={movieData} />
    </Box>
  );
}

export default App;
