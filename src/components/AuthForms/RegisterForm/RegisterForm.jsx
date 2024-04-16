import SpriteIcons from '../../../images/sprite.svg';
import auth from '../../../images/auth.png';
import logo from '../../../images/logo.png';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/authOperations';
import { toast } from 'react-hot-toast';
import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  AuthLink,
  BtnSubmit,
  Container,
  ErrMsg,
  EyeBtn,
  HeroImg,
  Label,
  LabelBox,
  Logo,
  LogoBox,
  StyledForm,
  StyledInput,
  Title,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const registerSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(30, 'Maximum 30 characters')
      .matches(/^[a-zA-Z_]+?\.[a-zA-Z\s]+$/, 'Wrong name.')
      .trim()
      .required('This is a required field'),
    email: Yup.string()
      .email('Invalid email address')
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Wrong email. Try again...')
      .trim()
      .required('This is a required field'),
    password: Yup.string()
      .min(7, 'At least 7 simbols')
      .max(20, 'At most 20 simbols')
      .trim()
      .required('This is a required field'),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      await dispatch(register(values)).unwrap();
      resetForm();
    } catch (error) {
      error === 'Request failed with status code 409'
        ? toast.error('This email already exists.')
        : toast.error('Registration failed!');
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Container>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <LogoBox>
              <Logo src={logo} />
              <span>read journey</span>
            </LogoBox>
            <Title>
              Expand your mind, reading <span>a book</span>
            </Title>
            <LabelBox>
              <Label htmlFor="name">Name:</Label>
              <StyledInput
                type="text"
                name="name"
                id="name"
                className={`special ${
                  errors.name && touched.name ? 'error' : ''
                } ${touched.name && !errors.name ? 'success' : ''}`}
              />
              <ErrMsg name="name" component="div" />
            </LabelBox>

            <LabelBox>
              <Label htmlFor="email">Mail:</Label>
              <StyledInput
                type="email"
                name="email"
                id="email"
                className={`special ${
                  errors.email && touched.email ? 'error' : ''
                } ${touched.email && !errors.email ? 'success' : ''}`}
              />
              <ErrMsg name="email" component="div" />
            </LabelBox>
            <LabelBox>
              <Label htmlFor="password">Password:</Label>
              <StyledInput
                autoComplete="off"
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="password"
                className={`special ${
                  touched.password && errors.password ? 'error' : ''
                } ${touched.password && !errors.password ? 'success' : ''}`}
              />
              <EyeBtn onClick={() => handleTogglePassword()} type="button">
                {touched.password && errors.password ? (
                  <svg width="20" height="20">
                    <use xlinkHref={`${SpriteIcons}#icon-error`} />
                  </svg>
                ) : touched.password && !errors.password ? (
                  <svg width="20" height="20">
                    <use xlinkHref={`${SpriteIcons}#icon-check`} />
                  </svg>
                ) : (
                  <svg width="18" height="18">
                    <use
                      xlinkHref={
                        showPassword
                          ? `${SpriteIcons}#icon-eye`
                          : `${SpriteIcons}#icon-eye-off`
                      }
                    />
                  </svg>
                )}
              </EyeBtn>
              <ErrMsg name="password" component="p" />
            </LabelBox>
            <BtnSubmit type="submit">
              <span>Registration</span>
            </BtnSubmit>
            <AuthLink to="/login">Already have an account?</AuthLink>
          </StyledForm>
        )}
      </Formik>
      <HeroImg src={auth} alt="phone" />
    </Container>
  );
};
