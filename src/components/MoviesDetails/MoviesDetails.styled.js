import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const SCLink = styled(Link)`
display: flex;
gap: 10px;
width: max-content;
padding: 8px 15px;
border: ${p => p.theme.borders.normal};
border-radius: ${p => p.theme.radii.lg};
text-decoration: none;
color: ${p => p.theme.colors.white};
background-color:  ${p => p.theme.colors.primary};
opacity: 0.4;
transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

:hover,
:focus {
opacity: 1;
};
`;

export const SCTitle = styled.h1`
margin-bottom: ${p => p.theme.space[4]}px;
`;
export const SCSubTitle = styled.p`
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[2]}px;
`;

export const SCText = styled.p`
margin-bottom: ${p => p.theme.space[4]}px;
`;

export const SCImageWrapper = styled.div`
flex-shrink: 0;
width: 300px;
height: auto;
border-radius: ${p => p.theme.radii.md};
overflow: hidden;
`;

export const SCNavBar = styled.div`
padding: ${p => p.theme.space[2]}px;
padding-bottom: 0;
 border-bottom: 0.5px solid rgba(77, 75, 77, 0.2);
 border-top: 0.5px solid rgba(77, 75, 77, 0.2);
`;

export const SCNavLink = styled(NavLink)`
position: relative;
  display: flex;
  align-items: flex-end;
  gap: ${p=> p.theme.space[3]}px;
  padding: 17px 0;
  color: ${p => p.theme.colors.text};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
 
 &.active {
color: ${p => p.theme.colors.accent};
  ::after {
   transform: scale(1);
 };
};

 ::after {
    position: absolute;
    bottom: -1px;
    left: 0;
    content: '';
    display: block;
    width: 100%;
    height: 4px;
   transform: scale(0);
    background-color: ${p => p.theme.colors.accent};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
};

  :hover:not(.active),
  :focus-visible:not(.active) {
  color: ${p=> p.theme.colors.accent};
 };
 `;

