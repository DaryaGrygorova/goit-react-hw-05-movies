import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const SCHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 64px;
  background-color: ${p => p.theme.colors.primary};
  box-shadow: 0  5px 7px 0 #b8b2b8;
`;

export const SCNavLink = styled(NavLink)`
  display: flex;
  align-items: flex-end;
  gap: ${p=> p.theme.space[3]}px;
  padding: 17px 0;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
 
 &.active {
  color: ${p=> p.theme.colors.white};
 };

  :hover:not(.active),
  :focus-visible:not(.active) {
  color: ${p=> p.theme.colors.accent};
 }
 `;

