import { createTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { MovieContext } from './context/MovieContext';

const useCustomTheme = () => {
  const { themeMode } = useContext(MovieContext);

  return createTheme({
    palette: {
      mode: themeMode,
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });
};

export default useCustomTheme;
