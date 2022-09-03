import { FaHome } from 'react-icons/fa';

import { GiFilmProjector } from 'react-icons/gi';
// import { CgDetailsMore } from 'react-icons/cg';

import { Box } from 'components/Box';
import { SCNavLink, SCHeader } from './AppBar.styled';

const navItems = [
  { href: 'home', text: 'Home', icon: FaHome },
  { href: 'movies', text: 'Movies', icon: GiFilmProjector },
];

const AppBar = () => {
  return (
    <>
      <SCHeader>
        <Box variant="header">
          {navItems.map(({ href, text, icon: Icon }) => (
            <SCNavLink to={href} key={href}>
              <Icon size="28" />
              {text}
            </SCNavLink>
          ))}
        </Box>
      </SCHeader>
    </>
  );
};

export default AppBar;
