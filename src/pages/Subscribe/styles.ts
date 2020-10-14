import styled, { css } from 'styled-components';
import BackgroundImage from '../../assets/Subscribe_Background.png';

interface Subscribe {
  fontColor: string;
}

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const FormSignIn = styled.div<Subscribe>`
  width: 100%;
  max-width: 900px;

  .subscribe__header-logo {
    display: grid;
    align-items: center;

    grid-template-columns: 50% 50%;
    width: 100%;

    padding: 32px 44px 20px 44px;

    a {
      justify-self: end;
      cursor: pointer;
      ${props =>
        props.fontColor === '#1B2431' &&
        css`
          filter: invert(12%) sepia(5%) saturate(3901%) hue-rotate(177deg)
            brightness(95%) contrast(95%);
        `}
    }
  }

  .subscribe__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding-left: calc(100% - 90vw);
    padding-right: calc(100% - 90vw);

    h1 {
      font-size: 48px;
      font-weight: 500;
      width: 100%;
      text-align: center;
      margin: 40px 40px 20px 40px;
    }

    form {
      width: 70%;
      min-width: 400px;
      display: flex;
      flex-direction: column;

      label {
        margin-top: 40px;
        margin-bottom: 5px;

        &:first-child {
          margin-top: 20px;
        }

        display: flex;
        justify-content: center;

        font-weight: 500;
      }

      div {
        display: flex;
        justify-content: center;

        button {
          margin-top: 40px;
        }
      }
    }

    p {
      margin-top: 20px;
      font-size: 14px;
      font-weight: 400;

      > a {
        padding-left: 5px;
        font-weight: 600;
        text-decoration: none;
        color: inherit;
      }
    }
  }
`;

export const ImageSignIn = styled.div`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: cover;
`;
