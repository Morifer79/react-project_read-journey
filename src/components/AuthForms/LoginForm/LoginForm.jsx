import SpriteIcons from '../../../images/sprite.svg';
import toast from 'react-hot-toast';
import auth from '../../../images/auth.png';
import logo from '../../../images/logo.png';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';
import { BtnLogin } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';
import {
  AuthLink,
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
} from '../RegisterForm/RegisterForm.styled';

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const loginSchema = Yup.object({
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
      await dispatch(logIn(values)).unwrap();
      toast.success('Welcome back!');
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleTogglePassword = () => {
    setShowPassword(prevState => !prevState);
  };

  return (
    <Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={loginSchema}
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
            <BtnLogin type="submit">
              <span>Log In</span>
            </BtnLogin>
            <AuthLink to="/register">Don`t have an account?</AuthLink>
          </StyledForm>
        )}
      </Formik>
      <HeroImg src={auth} alt="phone" />
    </Container>
  );
};
