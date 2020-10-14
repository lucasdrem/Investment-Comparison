import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
  width: string;
}

export const Container = styled.button<ButtonProps>`
  background: #121922;
  color: #ffffff;

  height: 40px;
  border-radius: 15px;
  border: 1px solid #ffffff;

  ${props => {
    return (
      props.width &&
      css`
        width: ${props.width};
      `
    );
  }}

  font-weight: 500;

  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#121922')};
  }
`;
