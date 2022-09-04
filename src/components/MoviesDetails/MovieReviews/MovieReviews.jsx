import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoPersonCircle } from 'react-icons/io5';

import { getMovieReviewsById } from 'service-api/MoviesAPI';
import Loader from '../../Loader';

import { SCTitle, SCSubTitle, SCText, SCReviews } from './MovieReviews.styled';
import { Box } from 'components/Box';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    movieId && setIsLoading(true);

    getMovieReviewsById(movieId)
      .then(({ results }) => {
        setMovieReviews(results);
      })
      .catch(err => console.log(err))
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <SCReviews>
      {isLoading && <Loader />}
      {!!movieReviews?.length ? (
        movieReviews.map(({ id, author, content, created_at, updated_at }) => (
          <Box key={id} mb={5}>
            <Box
              display="flex"
              gridGap="15px"
              flexWrap="wrap"
              alignItem="center"
            >
              <IoPersonCircle size="50px" />
              <Box>
                <SCTitle>{author}</SCTitle>
                <Box display="flex" gridGap="15px" mb={4}>
                  <SCSubTitle>
                    Created: {created_at.slice(0, 10).toLocaleString()}
                  </SCSubTitle>
                  {updated_at && (
                    <SCSubTitle>
                      Updated: {updated_at.slice(0, 10).toLocaleString()}
                    </SCSubTitle>
                  )}
                </Box>
              </Box>
            </Box>
            <SCText>{content}</SCText>
          </Box>
        ))
      ) : (
        <SCText>No Reviews</SCText>
      )}
    </SCReviews>
  );
};

export default MovieReviews;
