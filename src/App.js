import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Favorites from './components/Favorites';
import MovieDetails from './components/MovieDetails';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
};

export default App;
