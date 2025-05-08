import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { MovieContext } from '../context/MovieContext';

const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useContext(MovieContext);

  return (
    <IconButton onClick={toggleTheme} sx={{ position: 'absolute', top: 10, right: 10 }}>
      {themeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
    </IconButton>
  );
};

export default ThemeToggle;
