import React, { useContext } from 'react';
import { Typography, Box } from '@mui/material';
import MovieGrid from './MovieGrid';
import { MovieContext } from '../context/MovieContext';

const TrendingSection = () => {
  const { movies } = useContext(MovieContext);

  return (
    <Box mt={4}>
      <Typography variant="h5" align="center" gutterBottom>
        Trending Movies
      </Typography>
      <MovieGrid movies={movies} />
    </Box>
  );
};

export default TrendingSection;
