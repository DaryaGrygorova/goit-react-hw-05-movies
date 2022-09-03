import styled from "styled-components";

export const SCText = styled.p`
text-indent:  ${p => p.theme.space[5]}px;
color: ${p => p.theme.colors.text};
`;

export const SCTitle = styled.p`
font-weight: ${p =>p.theme.fontWeights.bold};
`;

export const SCSubTitle = styled.p`
margin-bottom: ${p => p.theme.space[2]}px;
font-size: ${p=>p.theme.fontSizes.m};
font-style: italic;
`;

export const SCReviews = styled.div`
 box-shadow: inset 0px 8px 10px -8px rgb(77,75,77);
  padding-top: ${p => p.theme.space[4]}px;
`;


