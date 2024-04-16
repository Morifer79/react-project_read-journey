import styled from 'styled-components';
import { theme } from '../../../../styleset/theme';
import { Field } from 'formik';

export const StyledSelect = styled(Field)`
  padding: ${theme.spacing(6)} ${theme.spacing(7)};
  max-inline-size: 120px;
  border-radius: ${theme.radii.m};
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.grey};
  outline: none;
  @media screen and (min-width: 768px) {
    max-inline-size: 153px;
  }

  option {
    color: ${theme.colors.lightgrey};
    font-size: 12px;
    line-height: 1.333;
    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.285;
    }
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: last baseline;
  gap: ${theme.spacing(7)};
`;

export const LibraryList = styled.ul`
  @media screen and (max-width: 1439px) {
    justify-content: center;
  }
  /* margin: 0 auto; */
  margin-block-start: ${theme.spacing(11)};
  display: flex;
  gap: ${theme.spacing(10.5)};

  @media screen and (min-width: 768px) {
    margin-block-start: ${theme.spacing(10)};
    flex-wrap: wrap;
    gap: ${theme.spacing(12.5)};
  }

  @media screen and (min-width: 1440px) {
    gap: ${theme.spacing(10)};
  }
`;

export const NoImageBox = styled.div`
  margin: 0 auto;
  padding-block: ${theme.spacing(30)};
  max-inline-size: 197px;
  text-align: center;
  @media screen and (min-width: 768px) {
    max-inline-size: 274px;
  }
  img {
    padding: ${theme.spacing(12.5)};
    margin-block-end: ${theme.spacing(5)};
    display: inline-block;
    inline-size: 100px;
    block-size: 100px;
    border-radius: ${theme.radii.xxl};
    background-color: ${theme.colors.secondary};
    @media screen and (min-width: 768px) {
      margin-block-end: ${theme.spacing(10)};
      inline-size: 130px;
      block-size: 130px;
    }
  }
  p {
    font-size: 14px;
    line-height: 1.285;
    span {
      color: ${theme.colors.lightgrey};
    }
  }
`;