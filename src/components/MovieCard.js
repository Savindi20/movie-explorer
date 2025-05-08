import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import { MovieContext } from '../context/MovieContext';

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { addToFavorites } = useContext(MovieContext);

  return (
    <Card sx={{ width: 200, m: 2, cursor: 'pointer' }} onClick={() => navigate(`/movie/${movie.id}`)}>
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="subtitle1">{movie.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.release_date?.slice(0, 4)} | ⭐ {movie.vote_average}
        </Typography>
        <IconButton onClick={(e) => { e.stopPropagation(); addToFavorites(movie); }}>
          <FavoriteIcon color="secondary" />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
