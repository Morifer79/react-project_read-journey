import styled from 'styled-components';
import { theme } from '../../../../styleset/theme';
import { Field } from 'formik';

export const Text = styled.h2`
  font-size: 10px;
  line-height: 1.2;
  font-weight: 500;
  margin-block-end: ${theme.spacing(4)};

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.285;
  }
`;

export const LabelBox = styled.div`
  position: relative;
`;

export const StyledInput = styled(Field)`
  position: relative;
  inline-size: 100%;
  margin-block-end: ${theme.spacing(4)};
  padding: ${theme.spacing(7)};
  border-radius: ${theme.radii.m};
  border: none;
  outline: none;
  background-color: ${theme.colors.secondary};

  font-size: 14px;
  line-height: 1.285;
  color: ${theme.colors.light};

  &[name='title'] {
    padding-left: 85px;
  }
  &[name='author'] {
    padding-left: 93px;
  }
  &[name='pages'] {
    padding-left: 135px;
  }

  @media screen and (min-width: 768px) {
    margin-block-end: ${theme.spacing(7)};
    min-inline-size: 295px;
  }

  @media screen and (min-width: 1440px) {
    margin-block-end: ${theme.spacing(4)};
    min-inline-size: 313px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: ${theme.spacing(4)};
  }
`;

export const BtnFilter = styled.button`
  margin-block-start: ${theme.spacing(6)};
  padding: ${theme.spacing(5)} ${theme.spacing(10)};
  background-color: transparent;
  border: 1px solid ${theme.colors.brd};
  border-radius: ${theme.radii.xl};
  transition: background-color ${theme.transition}, border ${theme.transition};

  &:is(:hover, :focus) {
    background-color: ${theme.colors.light};
    border: 1px solid transparent;
    span {
      color: ${theme.colors.primary};
    }
  }

  span {
    color: ${theme.colors.light};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    transition: color ${theme.transition};
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.125;
    }
  }

  @media screen and (min-width: 768px) {
    padding: ${theme.spacing(6)} ${theme.spacing(14)};
  }
`;
