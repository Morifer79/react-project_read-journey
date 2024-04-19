import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';
import { theme } from '../../../styleset/theme';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: ${theme.spacing(8)};
    justify-content: center;
  }
`;

export const StyledForm = styled(Form)`
  padding: 20px 20px 40px 20px;
  border-radius: ${theme.radii.xl};
  background: ${theme.colors.primary};

  @media screen and (min-width: 768px) {
    padding: 40px 64px 214px;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 64px;
  }
`;

export const LogoBox = styled.div`
  margin-block-end: ${theme.spacing(20)};

  @media screen and (min-width: 768px) {
    margin-block-end: ${theme.spacing(78.5)};
  }

  @media screen and (min-width: 1440px) {
    margin-block-end: ${theme.spacing(53.5)};
  }

  span {
    display: none;
    margin-inline-start: ${theme.spacing(2)};
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      display: inline-block;
    }
  }
`;

export const Logo = styled.img`
  display: inline-block;
  inline-size: 42px;
  block-size: 17px;
`;

export const Title = styled.h1`
  margin-block-end: ${theme.spacing(10)};
  max-inline-size: 295px;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  color: ${theme.colors.error};

  @media screen and (min-width: 768px) {
    margin-block-end: ${theme.spacing(20)};
    max-inline-size: 444px;
    font-size: 64px;
    line-height: 0.94;
  }

  span {
    color: ${theme.colors.grey};
  }
`;

export const LabelBox = styled.div`
  position: relative;
  @media screen and (min-width: 768px) {
    max-inline-size: 472px;
  }
`;

export const Label = styled.label`
  padding: 14px 10px 14px 14px;

  position: absolute;
  z-index: 1;

  color: ${theme.colors.lightgrey};
  font-size: 14px;
  line-height: 1.285;
`;

export const StyledInput = styled(Field)`
  margin-block-end: ${theme.spacing(4)};
  padding: ${theme.spacing(7)};

  position: relative;
  inline-size: 100%;
  border-radius: ${theme.radii.m};
  border: none;
  outline: none;
  background-color: ${theme.colors.secondary};

  font-size: 14px;
  line-height: 1.285;
  color: ${theme.colors.light};

  &[name='name'] {
    padding-inline-start: ${theme.spacing(31)};
  }
  &[name='email'] {
    padding-inline-start: ${theme.spacing(24.5)};
  }
  &[name='password'] {
    padding-inline-start: ${theme.spacing(41.5)};
  }
  &[name='page'] {
    padding-inline-start: ${theme.spacing(55.5)};
  }
  &[name='pages'] {
    padding-inline-start: ${theme.spacing(67.5)};
  }

  &.success {
    border: 1px solid ${theme.colors.progress};
  }

  &.error {
    border: 1px solid ${theme.colors.accent};
  }

  @media screen and (min-width: 768px) {
    margin-block-end: ${theme.spacing(7)};
  }
`;

export const ErrMsg = styled(ErrorMessage)`
  margin-block-end: ${theme.spacing(9)};

  font-size: 12px;
  color: ${theme.colors.accent};
`;

export const EyeBtn = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 14px;
  right: 16px;
`;

export const BtnSubmit = styled.button`
  margin-block-start: ${theme.spacing(6)};
  margin-inline-end: ${theme.spacing(7)};
  padding: ${theme.spacing(6)} ${theme.spacing(13.5)};

  border: 1px solid transparent;
  border-radius: ${theme.radii.xl};
  background-color: ${theme.colors.light};
  transition: background-color ${theme.transition}, border ${theme.transition};

  &:is(:hover, :focus) {
    background-color: transparent;
    border: 1px solid ${theme.colors.brd};
  }

  @media screen and (min-width: 768px) {
    margin-block-start: ${theme.spacing(34)};
    margin-inline-end: ${theme.spacing(10)};
    padding: ${theme.spacing(8)} ${theme.spacing(27)};

    span {
      font-size: 20px;
      line-height: 1;
    }
  }

  span {
    color: ${theme.colors.primary};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.333;
    transition: color ${theme.transition};
  }

  &:is(:hover, :focus) span {
    color: ${theme.colors.light};
  }
`;

export const AuthLink = styled(NavLink)`
  color: ${theme.colors.lightgrey};
  font-size: 12px;
  line-height: 1.17;
  text-decoration-line: underline;
  text-underline-offset: 2px;
  white-space: nowrap;
  transition: color ${theme.transition};

  &:is(:hover, :focus) {
    color: ${theme.colors.light};
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.285;
  }
`;

export const HeroImg = styled.img`
  margin-block-start: ${theme.spacing(5)};
  inline-size: 100%;
  border-radius: ${theme.radii.xl};

  @media screen and (min-width: 768px) and (max-width: 1439px) {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    max-inline-size: 600px;
    margin: 0;
  }
`;
