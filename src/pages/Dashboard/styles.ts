import styled, { css } from 'styled-components';

export interface ViewModeVariablesDTO {
  fontColor: string;
  backgroundColor: string;
  divisionGridColor: string;
}

export interface ThemeProvider {
  theme: ViewModeVariablesDTO;
}

export const DashBoard = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const DashboardArea = styled.div`
  padding: 20px;
`;

export const Container = styled.div`
  display: grid;
  align-items: stretch;
  @media (min-width: 1250px) {
    grid-template-columns: 40% 60%;
  }
  @media (max-width: 1250px) {
    grid-template-columns: 100%;
  }
  flex: 1;
`;

export const AssetsArea = styled.div<ThemeProvider>`
  ${props =>
    css`
      @media (min-width: 1250px) {
        border-right: 2px solid ${props.theme.divisionGridColor};
      }
      @media (max-width: 1250px) {
        border-bottom: 2px solid ${props.theme.divisionGridColor};
      }
    `}

  height: 100%;
`;

export const CalcBasis = styled.h2<ThemeProvider>`
  font-weight: 400;
  font-size: 22px;
  ${props =>
    css`
      color: ${props.theme.fontColor};
    `}
  > span {
    font-weight: 600;
  }

  > input {
    ${props =>
      css`
        background-color: ${props.theme.backgroundColor};
        color: ${props.theme.fontColor};
      `}

    border: 0;
    width: 130px;
    padding-left: 10px;
    font-weight: 600;
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  text-align: end;
  margin-right: 3%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 15px;

  > svg {
    margin-right: 3%;
    cursor: pointer;
  }

  a {
    margin-right: 3%;
    display: flex;
  }
`;
