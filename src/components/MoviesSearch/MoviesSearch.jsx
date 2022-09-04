import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Box } from '../Box';
import SearchForm from '../MoviesSearch/SearchForm';
import MovieItem from '../MovieItem';
import Loader from '../Loader';

import moviesAPI from 'service-api/MoviesAPI';
import { useSearchParams } from 'react-router-dom';

const MoviesSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';

  const [searchQuery, setSearchQuery] = useState(query);
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage(1);
    setMovies([]);
  }, [searchQuery, setSearchParams]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await moviesAPI.getMoviesBySearchQuery(searchQuery, page);
        setMovies([...data.results]);
      } catch (err) {
        toast.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (searchQuery.trim() !== '') {
      setIsLoading(true);
      getMovies();
    }
  }, [page, searchQuery]);

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
