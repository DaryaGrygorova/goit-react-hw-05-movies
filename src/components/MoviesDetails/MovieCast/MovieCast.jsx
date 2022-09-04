import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getMovieCastById, IMAGE_URL } from 'service-api/MoviesAPI';
import { Box } from 'components/Box';
import Loader from '../../Loader';
import placeholderIMG from '../../../images/unknown_person.png';

import {
  SCImageWrapper,
  SCTitle,
  SCSubTitle,
  SCText,
  SCCastList,
} from './MovieCast.styled';

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    movieId && setIsLoading(true);

    getMovieCastById(movieId)
      .then(results => {
        setMovieCast(results);
      })
      .catch(err => console.log(err))
      .finally(setIsLoading(false));
  }, [movieId]);

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
            <Box key={cast_id} as="li">
              <SCImageWrapper>
                {profile_path ? (
                  <img src={`${IMAGE_URL}w500${profile_path}`} alt={name} />
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
