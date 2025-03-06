import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import axiosOMDbAPI from "../api/axiosOMDbAPI";

function Form({ setMovieData }) {
  const [movieName, setMovieName] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!movieName.trim()) return; // Prevent empty searches

    axiosOMDbAPI
      .get(``, {
        params: { t: movieName },
      })
      .then((res) => {
        console.log(res.data);
        setMovieData(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSearch}
      sx={{ display: "flex", width: "80%", margin: "0 auto" }}
    >
      <TextField
        label="Movie's Name"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        sx={{ flexGrow: 1 }}
      />
      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
}

export default Form;
