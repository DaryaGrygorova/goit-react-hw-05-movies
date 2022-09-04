import styled from 'styled-components';

export const SCTitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const SCSubTitle = styled.p`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[2]}px;
`;

export const SCText = styled.p`
  font-size: ${p => p.theme.fontSizes.s};
  color: ${p => p.theme.colors.text};
  font-style: italic;
`;
export const SCCastList = styled.ul`
  box-shadow: inset 0px 8px 10px -8px rgb(77, 75, 77);
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  padding-top: ${p => p.theme.space[4]}px;

  li {
    width: calc((100% - 30px) / 3);
    display: flex;
    gap: 15px;
    align-items: center;
  /* box-shadow: 0 -2px 5px 1px #4d4b4d; */
  outline: 0.5px solid rgba(77, 75, 77, 0.2);
  border-radius: 8px;
  }
`;

export const SCImageWrapper = styled.div`
  flex-shrink: 0;
  width: 30%;
  height: auto;
  border-radius: ${p => p.theme.radii.md};
  overflow: hidden;
`;
