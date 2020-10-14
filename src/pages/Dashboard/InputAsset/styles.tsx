import styled, { css } from 'styled-components';

import * as stylesDashboard from '../styles';

export const InputAsset = styled.div<stylesDashboard.ThemeProvider>`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-right: 20px;

  span {
    ${props =>
      css`
        color: ${props.theme.fontColor};
      `}
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 500;
  }

  #dashboard__ticker--input {
    text-align: center;
  }

  input {
    border: 0;
    border-radius: 15px;
    background-color: #c4c4c4;
    padding: 0px 20px 0px 20px;
    font-weight: 600;
    height: 42px;
  }

  > div {
    display: grid;
    grid-template-columns: 49% 49%;
    column-gap: 2%;

    input {
      font-size: 22px;
    }
  }

  .MuiAutocomplete-root {
    display: grid;
    grid-template-columns: 100%;
  }

  .MuiInput-underline:after,
  .MuiInput-underline:before {
    border-bottom: 0 !important;
  }

  .MuiAutocomplete-inputRoot[class*='MuiInput-root']
    .MuiAutocomplete-input:first-child {
    padding: 0;
  }

  .MuiAutocomplete-inputRoot[class*='MuiInput-root'] .MuiAutocomplete-input {
    padding: 0;
  }

  .MuiFormControl-marginNormal {
    margin: 0 !important;
  }
`;
