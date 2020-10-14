import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Container = styled(animated.div)<ContainerProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  & + div {
    margin-top: 8px;
  }
  ${props => toastTypeVariations[props.type || 'info']}
  > svg {
    margin: 20px 12px 0 0;
  }
  div {
    flex: 1;
    p {
      margin-top: 4px;
      font-size: 12px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }
  @media (min-width: 2000px) {
    width: 450px;
    padding: 16px 30px 16px 16px;
    border-radius: 15px;
    > svg {
      margin: 6px 12px 0 0;
    }
    div p {
      margin-top: 9px;
      font-size: 19px;
      opacity: 0.8;
      line-height: 20px;
    }
  }
  @media (min-width: 3500px) {
    width: 700px;
    padding: 16px 30px 16px 16px;
    border-radius: 11px;
    height: 115px;
    > svg {
      margin: 31px 24px 0 0;
    }
    div {
      p {
        margin-top: 32px;
        font-size: 40px;
        opacity: 0.8;
        line-height: 20px;
      }
    }
  }
`;
