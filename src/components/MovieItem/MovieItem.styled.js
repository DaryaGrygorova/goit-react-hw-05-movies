import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SCTitle = styled.h1`
  margin-bottom: 15px;
`;

export const SCNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  transform: scale(1);
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1);;

  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.accent};
    box-shadow: 12px 17px 11px -7px rgba(77,75,77,0.65); 
    transform: scale(1.01);


    ::after {
      transform: scale(1);
    }
  }

  ::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    background-color: ${p => p.theme.colors.accent};
    height: 2px;
    width: 100%;
    transform: scale(0);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const SCImageWrapper = styled.div`
  /* flex-shrink: 0; */
  width: 100%;
  height: auto;
  border-radius: ${p => p.theme.radii.md};
    overflow: hidden;
`;
export const SCText = styled.p`
  padding: ${p => p.theme.space[3]}px 0;
`;
