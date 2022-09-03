import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';

import moviesAPI from 'service-api/MoviesAPI';
import { Box } from 'components/Box';
import Loader from '../Loader';
import placeholderIMG from '../../images/placeholder.webp';

import {
  SCButton,
  SCImageWrapper,
  SCTitle,
  SCSubTitle,
  SCText,
  SCNavBar,
  SCNavLink,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const { pathname, state } = useLocation();
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { poster_path, title, vote_average, overview, genres } = movieData;
  const historyLocation = !!state ? `${state?.pathname}${state?.search}` : '';
  const moviesID = pathname.slice(32);

  useEffect(() => {
    const getMovieData = id => {
      moviesAPI
        .getMoviesById(id)
        .then(results => {
          setMovieData(results);
        })
        .catch(err => toast.error(err))
        .finally(setIsLoading(false));
    };
    if (moviesID) {
      setIsLoading(true);
      getMovieData(
        Number(moviesID)
          ? moviesID
          : Number(moviesID.slice(0, -5))
          ? moviesID.slice(0, -5)
          : moviesID.slice(0, -8)
      );
    }
  }, [moviesID]);

  return (
    <>
      <SCButton type="button" href={historyLocation}>
        <FaArrowLeft size="24" />
        Go back
      </SCButton>
      {isLoading && <Loader />}
      {!movieData?.length && (
        <>
          <Box as="article" display="flex" gridGap="15px" mt={5} mb={5}>
            <SCImageWrapper>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={title}
                />
              ) : (
                <img src={placeholderIMG} alt={title} />
              )}
            </SCImageWrapper>
            <Box>
              <SCTitle>{title}</SCTitle>
              <SCText>
                User Score: {vote_average ? vote_average.toFixed(1) : '-'}
              </SCText>
              <SCSubTitle>Overview</SCSubTitle>
              <SCText>{overview || '-'}</SCText>
              <SCSubTitle>Genres</SCSubTitle>
              <SCText>
                {genres?.map(genre => genre.name).join(', ') || '-'}
              </SCText>
            </Box>
          </Box>

          <SCNavBar>
            Additional information
            <Box as="ul" display="flex" gridGap="15px">
              <Box as="li">
                <SCNavLink to="cast">Cast</SCNavLink>
              </Box>
              <Box as="li">
                <SCNavLink to="reviews">Reviews</SCNavLink>
              </Box>
            </Box>
          </SCNavBar>

          <Box>
            <Suspense>
              <Outlet />
            </Suspense>
          </Box>
        </>
      )}
    </>
  );
};

export default MoviesDetails;
