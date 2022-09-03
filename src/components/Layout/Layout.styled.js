import styled from 'styled-components';
import { Box } from 'components/Box';

export const SCHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background-color: ${p => p.theme.colors.primary};
`;

export const SCContainer = styled.nav`
  display: flex;
  gap: 20px;
  width: 1044px;
  height: 100%;
  margin: 0 auto;
  padding: 10px;
  align-items: center;
  `;
