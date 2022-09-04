import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Box } from '../Box';
import SearchForm from '../MoviesSearch/SearchForm';
import MovieItem from '../MovieItem';
import Loader from '../Loader';

import { getMoviesBySearchQuery } from 'service-api/MoviesAPI';
import { useSearchParams } from 'react-router-dom';

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const [searchQuery, setSearchQuery] = useState(query);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMovies([]);
  }, [searchQuery]);

  useEffect(() => {
    if (searchQuery.trim() !== '') {
      setIsLoading(true);

      getMoviesBySearchQuery(searchQuery)
        .then(({ data }) => {
          setMovies([...data.results]);
        })
        .catch(err => toast.error(err))
        .finally(setIsLoading(false));
    }
  }, [searchQuery]);

  const onChangeQuery = query => {
    setSearchParams({ query });
  };

  const onFormSubmit = query => {
    setSearchQuery(query);
  };

  return (
    <Box>
      <SearchForm
        value={query}
        onChange={onChangeQuery}
        onFormSubmit={onFormSubmit}
      />
      {isLoading && <Loader />}
      {!!movies?.length && !isLoading && (
        <Box as="ul" pt={4}>
          {movies.map(movie => (
            <Box key={movie.id}>
              <MovieItem movie={movie} />
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default MoviesSearch;
