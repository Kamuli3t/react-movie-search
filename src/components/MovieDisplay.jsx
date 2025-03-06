import { Box, Grid2, Typography } from "@mui/material";

export default function MovieDisplay({ movieData: movie }) {
  // Function to return loaded JSX
  const loaded = () => {
    return (
      movie && (
        <Box sx={{ width: "100%" }}>
          <Grid2 container spacing={1}>
            <Grid2 size={7}>
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </Grid2>
            <Grid2 container direction="column" size={5}>
              <Grid2>
                <Typography variant="h1">{movie.Title}</Typography>
              </Grid2>
              <Grid2>
                <Typography variant="h4">Genre: {movie.Genre}</Typography>
              </Grid2>
              <Grid2>
                <Typography variant="h4">Year: {movie.Year}</Typography>
              </Grid2>
            </Grid2>
          </Grid2>
        </Box>
      )
    );
  };

  // Function to return loading JSX
  const loading = () => {
    return (
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        No Movie to Display
      </Typography>
    );
  };

  // Ternary operator will determine which functions JSX we will return
  return movie ? loaded() : loading();
}
