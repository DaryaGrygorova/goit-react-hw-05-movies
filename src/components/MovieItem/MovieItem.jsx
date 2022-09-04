import { SCNavLink } from './MovieItem.styled';
import { GiFilmSpool } from 'react-icons/gi';
import { useLocation } from 'react-router-dom';

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

export default MovieItem;
