import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Loader from 'components/Loader';
import MovieItem from 'components/MovieItem';
import { getTrendingMovies } from '../../service-api/MoviesAPI';
import { Box } from 'components/Box';

import { SCTitle, SCMovieList } from './TrendingMoviesList.styled';

const TrendingMoviesList = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getTrendingMovies()
      .then(({ results }) => {
        setTrendingMovies(results);
      })
      .catch(err => toast.error(err))
      .finally(setIsLoading(false));
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <Box>
      <SCTitle>Trending today (Top-20)</SCTitle>
      {!!trendingMovies?.length && (
        <SCMovieList>
          {trendingMovies.map(movie => (
            <Box as="li" key={movie.id}>
              <MovieItem movie={movie} />
            </Box>
          ))}
        </SCMovieList>
      )}
    </Box>
  );
};

export default TrendingMoviesList;
