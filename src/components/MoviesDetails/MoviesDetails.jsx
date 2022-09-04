import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useState, useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { toast } from 'react-toastify';

import moviesAPI from 'service-api/MoviesAPI';
import { Box } from 'components/Box';
import Loader from '../Loader';
import placeholderIMG from '../../images/placeholder.webp';

import {
  SCLink,
  SCImageWrapper,
  SCTitle,
  SCSubTitle,
  SCText,
  SCNavBar,
  SCNavLink,
} from './MoviesDetails.styled';

const MoviesDetails = () => {
  const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;
  const { pathname, state } = useLocation();
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { poster_path, title, vote_average, overview, genres } = movieData;

  const getSearchPath = () => {
    if (pathname.includes('cast')) {
      return pathname?.slice(32, -5);
    }
    if (pathname.includes('reviews')) {
      return pathname?.slice(32, -8);
    }
    return pathname?.slice(32);
  };

  const searchPath = getSearchPath() || state?.pathname?.slice(32);

  useEffect(() => {
    const getMovieData = searchPath => {
      moviesAPI
        .getMovieDetails(searchPath)
        .then(results => {
          setMovieData(results);
        })
        .catch(err => toast.error(err))
        .finally(setIsLoading(false));
    };
    if (searchPath) {
      setIsLoading(true);
      getMovieData(searchPath);
    }
  }, [searchPath]);

  return (
    <>
      <SCLink to={state || `/${ROUTE_HOME_PAGE}`}>
        <FaArrowLeft size="24" />
        Go back
      </SCLink>
      {isLoading && <Loader />}
      {!movieData?.length && (
        <>
          <Box as="article" display="flex" gridGap="15px" mt={5} mb={5}>
            <SCImageWrapper>
              {poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
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
                <SCNavLink state={state} to="cast">
                  Cast
                </SCNavLink>
              </Box>
              <Box as="li">
                <SCNavLink state={state} to="reviews">
                  Reviews
                </SCNavLink>
              </Box>
            </Box>
          </SCNavBar>

          <Box>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Box>
        </>
      )}
    </>
  );
};

export default MoviesDetails;
