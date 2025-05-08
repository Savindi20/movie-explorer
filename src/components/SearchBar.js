import React, { useState, useContext } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { searchMovies } from '../api/tmdb';
import { MovieContext } from '../context/MovieContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { setMovies, setLastSearch } = useContext(MovieContext);

  const handleSearch = async () => {
    if (!query) return;
    const res = await searchMovies(query);
    setMovies(res.data.results);
    setLastSearch(query);
  };

  return (
    <Box display="flex" gap={2} justifyContent="center" mt={2}>
      <TextField
        label="Search Movies"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
      />
      <Button variant="contained" onClick={handleSearch}>
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
