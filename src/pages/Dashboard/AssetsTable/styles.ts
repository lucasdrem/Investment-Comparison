import styled, { css } from 'styled-components';

import * as stylesDashboard from '../styles';

export const TableAssets = styled.div<stylesDashboard.ThemeProvider>`
  h3 {
    font-size: 22px;
    font-weight: 600;
    margin: 80px 0 0px 0;
    text-align: center;
    ${props =>
      css`
        color: ${props.theme.fontColor};
      `}
  }

  .ScrollbarsCustom {
    height: 556px !important;
    width: 98% !important;
    @media (max-width: 1250px) {
      margin-bottom: 25px;
    }
  }

  .ScrollbarsCustom-ThumbY {
    background-color: #53607a !important;
  }

  .ScrollbarsCustom-TrackY {
    background-color: #1b2431 !important;
  }

  ul {
    list-style: none;

    li {
      display: flex;
      height: 80px;

      ${props =>
        css`
          border-bottom: 1px solid ${props.theme.divisionGridColor};
          color: ${props.theme.fontColor};
        `}

      align-items: flex-end;
      padding-bottom: 10px;
      font-size: 24px;
      font-weight: 500;

      > div {
        width: 100%;
        display: grid;
        align-items: center;
        grid-template-columns: 9% 81% 10%;

        > svg {
          margin-right: 10px;
        }

        #dashboard__table--delete-icon {
          justify-self: end;
          cursor: pointer;
        }
      }
    }
  }
`;
