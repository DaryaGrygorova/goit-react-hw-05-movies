import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import moviesAPI from 'service-api/MoviesAPI';
import { Box } from 'components/Box';
import Loader from '../Loader';
import placeholderIMG from '../../images/placeholder.webp';

import {
  SCImageWrapper,
  SCTitle,
  SCSubTitle,
  SCText,
  SCCastList,
} from './MovieCast.styled';

const MovieCast = () => {
  const { pathname } = useLocation();
  const [movieCast, setMovieCast] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getSearchPath = () => {
    if (pathname.includes('cast')) {
      return pathname?.slice(32, -4) + 'credits';
    }
    return pathname?.slice(32);
  };

  const searchPath = getSearchPath();

  useEffect(() => {
    const getMovieCast = searchPath => {
      moviesAPI
        .getMovieDetails(searchPath)
        .then(results => {
          setMovieCast(results);
        })
        .catch(err => console.log(err))
        .finally(setIsLoading(false));
    };
    if (searchPath) {
      setIsLoading(true);
      getMovieCast(searchPath);
    }
  }, [searchPath]);

  return (
    <SCCastList>
      {isLoading && <Loader />}
      {!!movieCast?.cast?.length &&
        movieCast?.cast.map(
          ({
            cast_id,
            profile_path,
            name,
            known_for_department,
            character,
          }) => (
            <Box
              key={cast_id}
              display="flex"
              gridGap="15px"
              as="li"
              alignItems="center"
              mb={5}
            >
              <SCImageWrapper>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt={name}
                  />
                ) : (
                  <img src={placeholderIMG} alt={name} />
                )}
              </SCImageWrapper>
              <Box>
                <SCTitle>{name || '-'}</SCTitle>
                <SCSubTitle>Character: {character || '-'}</SCSubTitle>
                <SCText>{known_for_department || '-'}</SCText>
              </Box>
            </Box>
          )
        )}
    </SCCastList>
  );
};

export default MovieCast;
