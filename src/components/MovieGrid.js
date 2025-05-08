import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';
import { MovieContext } from '../context/MovieContext';

const MovieGrid = () => {
  const { movies } = useContext(MovieContext);

  return (
    <Grid container justifyContent="center">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Grid>
  );
};

export default MovieGrid;
