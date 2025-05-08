import React, { useContext } from 'react';
import { Typography, Grid, Box } from '@mui/material';
import MovieCard from './MovieCard';
import { MovieContext } from '../context/MovieContext';

const Favorites = () => {
  const { favorites } = useContext(MovieContext);

  return (
    <Box>
      <Typography variant="h4" align="center" mt={2}>
        Your Favorite Movies
      </Typography>
      <Grid container justifyContent="center">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Box>
  );
};

export default Favorites;
