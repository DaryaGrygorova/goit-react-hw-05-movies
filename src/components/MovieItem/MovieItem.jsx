import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { IMAGE_URL } from 'service-api/MoviesAPI';
import placeholderIMG from '../../images/placeholder.webp';

import { SCNavLink, SCImageWrapper, SCText } from './MovieItem.styled';

const MovieItem = ({ movie }) => {
  const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;
  const { id, title, poster_path } = movie;
  const location = useLocation();

  return (
    <SCNavLink
      to={`/${ROUTE_HOME_PAGE}/movies/${id}`}
      key={id}
      state={location}
    >
      <SCImageWrapper>
        {poster_path ? (
          <img src={`${IMAGE_URL}w500${poster_path}`} alt={title} />
        ) : (
          <img src={placeholderIMG} alt={title} />
        )}
      </SCImageWrapper>
      <SCText>{title || 'No name film'}</SCText>
    </SCNavLink>
  );
};
MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieItem;
