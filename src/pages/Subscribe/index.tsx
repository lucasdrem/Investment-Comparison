import React, { useCallback, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

import { FiMail, FiLock, FiUser, FiShield } from 'react-icons/fi';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import BeatLoader from 'react-spinners/BeatLoader';

import Logo_Mini from '../../assets/Logo_Mini_VC.png';
import Arrow_Subscribe from '../../assets/Arrow _Subscribe.svg';

import InputForm from '../../components/InputForm';
import ButtonForm from '../../components/ButtonForm';

import { Container, FormSignIn, ImageSignIn } from './styles';
import { useToast } from '../../hooks/toast';

import cadastraUsuario from '../../services/Subscribe';
import { useViewMode } from '../../hooks/viewMode';

const SignIn: React.FC<RouteComponentProps> = ({ history }) => {
  const [initialValuesLogin] = useState({
    email: '',
    name: '',
    password: '',
    password_confirm: '',
  });
  const { addToast } = useToast();
  const { fontColor } = useViewMode();

  const onSubmitFormLogin = useCallback(
    async values => {
      cadastraUsuario(values.name, values.email, values.password)
        .then(() => {
          addToast({
            type: 'success',
            title: 'Success!',
            description: 'You can access your account now!',
          });
          history.push('/');
        })
        .catch(() => {
          addToast({
            type: 'error',
            title: 'Subscribe Error',
            description: 'Something went wrong',
          });
        });
    },
    [addToast, history],
  );

  const validationSchemaLogin = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    name: Yup.string().required('Invalid name'),
    password: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    password_confirm: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords must match',
    ),
  });

  return (
    <Container>
      <ImageSignIn />

      <FormSignIn fontColor={fontColor}>
        <div className="subscribe__header-logo">
          <img src={Logo_Mini} alt="Logo VC" />
          <Link to="/">
            <img src={Arrow_Subscribe} alt="Voltar" />
          </Link>
        </div>

        <div className="subscribe__form">
          <h1>FAÇA SEU CADASTRO</h1>
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
                <label htmlFor="nome">Nome</label>
                <InputForm
                  name="name"
                  type="text"
                  icon={FiUser}
                  error={errors.name}
                  value={values.name}
                  touched={touched.name}
                  onChange={handleChange}
                />
                <label htmlFor="senha">Senha</label>
                <InputForm
                  name="password"
                  type="password"
                  icon={FiLock}
                  error={errors.password}
                  value={values.password}
                  touched={touched.password}
                  onChange={handleChange}
                />
                <label htmlFor="confirme_senha">Confirme sua senha</label>
                <InputForm
                  name="password_confirm"
                  type="password"
                  icon={FiShield}
                  error={errors.password_confirm}
                  value={values.password_confirm}
                  touched={touched.password_confirm}
                  onChange={handleChange}
                />
                <div>
                  <ButtonForm
                    width="50%"
                    isSubmitting={isSubmitting}
                    Icon={BeatLoader}
                  >
                    INSCREVER
                  </ButtonForm>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </FormSignIn>
    </Container>
  );
};

export default SignIn;
