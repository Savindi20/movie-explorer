import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/tmdb';
import {
  Box,
  Typography,
  CardMedia,
  Chip,
  CircularProgress,
  Grid,
  Link
} from '@mui/material';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await getMovieDetails(id);
        setMovie(res.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [id]);

  if (loading) return <CircularProgress sx={{ mt: 5 }} />;

  if (!movie) return <Typography variant="h6">Movie not found.</Typography>;

  const trailer = movie.videos?.results.find((v) => v.type === 'Trailer');

  return (
    <Box sx={{ mt: 4, mx: 'auto', maxWidth: 900 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Typography variant="h4" gutterBottom>{movie.title}</Typography>
          <Typography variant="body1" gutterBottom>{movie.overview}</Typography>
          <Typography variant="subtitle2">Release Date: {movie.release_date}</Typography>
          <Typography variant="subtitle2" gutterBottom>Rating: ⭐ {movie.vote_average}</Typography>
          <Box mt={2}>
            {movie.genres?.map((genre) => (
              <Chip key={genre.id} label={genre.name} sx={{ mr: 1 }} />
            ))}
          </Box>
          {trailer && (
            <Box mt={3}>
              <Typography variant="h6">Watch Trailer:</Typography>
              <Link
                href={`https://www.youtube.com/watch?v=${trailer.key}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube Link
              </Link>
            </Box>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieDetails;
