import styled from 'styled-components';
import BackgroundImage from '../../assets/SignIn_Background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const FormSignIn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-left: calc(100% - 90vw);
  padding-right: calc(100% - 90vw);

  width: 100%;
  max-width: 900px;

  h1 {
    font-size: 48px;
    font-weight: 500;
    width: 100%;
    text-align: center;
    margin: 40px 40px 20px 40px;
  }

  form {
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      display: flex;
      justify-content: center;
      font-weight: 500;
      margin-bottom: 5px;
    }

    .sign-in__forms--senha {
      margin-top: 20px;
    }

    input + input {
      margin-top: 50px;
    }

    div {
      display: flex;
      justify-content: center;

      button {
        margin-top: 20px;
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
`;

export const ImageSignIn = styled.div`
  flex: 1;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: cover;
`;
