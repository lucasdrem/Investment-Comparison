import { createGlobalStyle, css } from 'styled-components';

interface GlobalStyleProps {
  backgroundColor: string;
  fontColor: string;
}

export default createGlobalStyle<GlobalStyleProps>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    ${props =>
      css`
        background: ${props.backgroundColor};
        color: ${props.fontColor};
      `}

    -webkit-font-smoothing: antialiased;
  }

  body,
  input,
  button {
    font-family: 'Jost', sans-serif;
    font-size: 24px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
