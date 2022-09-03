import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border: ${p=>p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.lg};
  border-color: ${p => p.theme.colors.primary};
  overflow: hidden;
`;

export const Label = styled.label`
 position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
 `;

export const Input = styled(Field)`
  display: inline-block;
  height: 100%;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 10px;
  padding-right: 4px;

  ::placeholder {
  font: inherit;
  font-size: 18px;
}
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};

  :hover,
  :focus {
  opacity: 1;
  }
`;