import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const SCTitle = styled.h2`
margin-bottom: ${p => p.theme.space[3]}px;
`;
export const SCSubTitle = styled.p`
font-weight: ${p => p.theme.fontWeights.bold};
margin-bottom: ${p => p.theme.space[2]}px;
`;

export const SCText = styled.p`
color: ${p => p.theme.colors.text};
font-style: italic;
`;
export const SCCastList = styled.ul`
 box-shadow: inset 0px 8px 10px -8px rgb(77,75,77);

 li:first-child {
  padding-top: ${p => p.theme.space[4]}px;
 }
`;

export const SCImageWrapper = styled.div`
flex-shrink: 0;
width: 100px;
height: auto;
border-radius: ${p => p.theme.radii.md};
overflow: hidden;
`;


