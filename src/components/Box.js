import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  variant,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  variant({
    variants: {
      container: {
        maxWidth: '1440px',
        margin: '0 auto',
        paddingLeft: '10px',
        paddingRight: '10px',
      },
      header: {
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        gridGap: '25px',
        alignItems: 'center',
        height: '100%',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
    },
  })
);
