import { GiFilmSpool } from 'react-icons/gi';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { SCNavLink } from './MovieItem.styled';

const MovieItem = ({ movie }) => {
  const ROUTE_HOME_PAGE = process.env.REACT_APP_ROUTE_HOME_PAGE;
  const { id, title } = movie;
  const location = useLocation();

  return (
    <SCNavLink
      to={`/${ROUTE_HOME_PAGE}/movies/${id}`}
      key={id}
      state={location}
    >
      <GiFilmSpool size="24" />
      {title || 'No name film'}
    </SCNavLink>
  );
};
MovieItem.propTypes = {
  movie: PropTypes.object.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
export default MovieItem;
