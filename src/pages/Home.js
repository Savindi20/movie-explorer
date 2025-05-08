import React from 'react';
import { Container, Typography } from '@mui/material';
import SearchBar from '../components/SearchBar';
import TrendingSection from '../components/TrendingSection';
import MovieGrid from '../components/MovieGrid';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom mt={3}>
        Movie Explorer 🎬
      </Typography>
      <SearchBar />
      <MovieGrid />
      <TrendingSection />
    </Container>
  );
};

export default Home;
