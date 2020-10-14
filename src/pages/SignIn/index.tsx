import React, { useCallback, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { FiMail, FiLock } from 'react-icons/fi';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import BeatLoader from 'react-spinners/BeatLoader';
import Logo from '../../assets/Logo_VC.svg';
import InputForm from '../../components/InputForm';
import ButtonForm from '../../components/ButtonForm';

import { Container, FormSignIn, ImageSignIn } from './styles';
import { useToast } from '../../hooks/toast';

import comdadoLogin from '../../services/SignIn/loginComdinheiro';

const SignIn: React.FC<RouteComponentProps> = ({ history }) => {
  const [initialValuesLogin] = useState({
    email: '',
    password: '',
  });
  const { addToast } = useToast();

  const onSubmitFormLogin = useCallback(
    async (values, { setSubmitting }) => {
      const loginToken = await comdadoLogin(values);
      if (loginToken?.access_token) {
        localStorage.setItem(
          '@ComparadorAtivos: token',
          JSON.stringify(loginToken),
        );
        setSubmitting(false);
        history.push('/Dashboard');
      } else {
        addToast({
          type: 'error',
          title: 'Auth Error',
          description: 'Wrong password or email!',
        });
      }
    },
    [history, addToast],
  );

  const validationSchemaLogin = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
  });

  return (
    <Container>
      <FormSignIn>
        <img src={Logo} alt="Logo Sign In" />

        <h1>COMPARADOR DE ATIVOS</h1>
        <Formik
          initialValues={initialValuesLogin}
          onSubmit={onSubmitFormLogin}
          validationSchema={validationSchemaLogin}
        >
          {({ values, errors, handleChange, touched, isSubmitting }) => (
            <Form>
              <label htmlFor="email">E-mail</label>
              <InputForm
                name="email"
                type="text"
                icon={FiMail}
                value={values.email}
                error={errors.email}
                touched={touched.email}
                onChange={handleChange}
              />
              <label htmlFor="senha" className="sign-in__forms--senha">
                Senha
              </label>
              <InputForm
                name="password"
                type="password"
                icon={FiLock}
                error={errors.password}
                value={values.password}
                touched={touched.password}
                onChange={handleChange}
              />
              <div>
                <ButtonForm
                  width="50%"
                  isSubmitting={isSubmitting}
                  Icon={BeatLoader}
                >
                  ENTRAR
                </ButtonForm>
              </div>
            </Form>
          )}
        </Formik>

        <p>
          Ainda não possui conta?
          <Link to="/Inscreva-se">Inscreva-se</Link>
        </p>
      </FormSignIn>

      <ImageSignIn />
    </Container>
  );
};

export default SignIn;
