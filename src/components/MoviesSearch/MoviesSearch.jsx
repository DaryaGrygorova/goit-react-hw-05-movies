import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Box } from '../Box';
import SearchForm from '../MoviesSearch/SearchForm';
import MovieItem from '../MovieItem';
import Loader from '../Loader';

import moviesAPI from 'service-api/MoviesAPI';
import { useSearchParams } from 'react-router-dom';

const MoviesSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setPage(1);
    setMovies([]);
    setSearchParams(searchQuery ? { query: searchQuery } : {});
  }, [searchQuery, setSearchParams]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await moviesAPI.getMoviesBySearchQuery(searchQuery, page);
        setMovies(state => [...state, ...data.results]);
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

  return (
    <Box>
      <SearchForm
        // value={filter}
        // onChange={onChangeFilter}
        onFormSubmit={setSearchQuery}
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
