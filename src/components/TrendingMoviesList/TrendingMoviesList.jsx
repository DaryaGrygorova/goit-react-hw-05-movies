import MovieItem from 'components/MovieItem';
import { useState, useEffect } from 'react';

import moviesAPI from '../../service-api/MoviesAPI';
import { Box } from '../Box';

import { SCTitle } from './TrendingMoviesList.styled';

const TrendingMoviesList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    moviesAPI.getTrendingMovies().then(({ results }) => {
      setTrendingMovies(results);
    });
  }, []);

  return (
    <Box>
      <SCTitle>Trending today (Top-20)</SCTitle>
      {!!trendingMovies?.length && (
        <ul>
          {trendingMovies.map(movie => (
            <Box as="li" key={movie.id}>
              <MovieItem movie={movie} />
            </Box>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default TrendingMoviesList;
