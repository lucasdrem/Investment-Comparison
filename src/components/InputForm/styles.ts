import styled, { css } from 'styled-components';

interface ContainerInputProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerInputProps>`
  background: #c4c4c4;
  border-radius: 28px;
  height: 60px;

  padding: 22px;
  width: 100%;

  ${props =>
    props.isFocused &&
    css`
      border: 2px solid black;
    `}

  color: #1b2431;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;

    background: transparent;
    border: 0;
    color: #1b2431;

    &::placeholder {
      color: #1b2431;
    }
  }

  > svg {
    margin-right: 16px;
  }
`;

export const IconError = styled.div`
  svg {
    color: #98005b;
    cursor: pointer;
  }
`;

export const TooltipErrorMessage = styled.div``;
