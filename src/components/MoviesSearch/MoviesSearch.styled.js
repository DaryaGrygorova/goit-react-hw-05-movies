import styled from "styled-components";

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