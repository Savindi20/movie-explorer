import React, { createContext, useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../api/tmdb';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/localStorage';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState(loadFromLocalStorage('favorites') || []);
  const [lastSearch, setLastSearch] = useState(loadFromLocalStorage('lastSearch') || '');
  const [themeMode, setThemeMode] = useState('light');

  useEffect(() => {
    fetchTrendingMovies().then(res => setMovies(res.data.results));
  }, []);

  useEffect(() => {
    saveToLocalStorage('favorites', favorites);
  }, [favorites]);

  useEffect(() => {
    saveToLocalStorage('lastSearch', lastSearch);
  }, [lastSearch]);

  const addToFavorites = (movie) => {
    if (!favorites.find((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((movie) => movie.id !== id));
  };

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        favorites,
        addToFavorites,
        removeFromFavorites,
        lastSearch,
        setLastSearch,
        themeMode,
        toggleTheme,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export default MovieProvider;