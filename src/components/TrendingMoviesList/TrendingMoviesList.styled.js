import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SCTitle = styled.h1`
margin-bottom: 15px;
`;

export const SCNavLink = styled(NavLink)`
position: relative;
  display: inline-flex;
  align-items: flex-end;
  gap: ${p => p.theme.space[3]}px;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${p=>p.theme.space[3]}px 0;

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
    
   ::after {
    transform: scale(1);
  }
  }

  ::after {
    content: '';
    position: absolute;
    bottom: ${p=>p.theme.space[3]}px;
    left: 32px;
    display: block;
    background-color: ${p => p.theme.colors.accent};
    height: 2px;
    width: calc(100% - 32px);
    transform: scale(0);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const SCMovieList = styled.ul`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding-top: ${p => p.theme.space[4]}px;
  
  li {
    width: calc((100% - 45px) / 4);
    display: flex;
    align-items: stretch;
    gap: 15px;
  border-radius: 8px;
  }
`;
