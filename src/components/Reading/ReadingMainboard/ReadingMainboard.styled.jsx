import styled from 'styled-components';
import { theme } from '../../../styleset/theme';

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  img {
    margin-block-end: ${theme.spacing(5)};
    border-radius: ${theme.radii.s};
    inline-size: 137px;
    block-size: 208px;
    @media screen and (min-width: 768px) {
      margin-block-end: ${theme.spacing(12.5)};
      border-radius: ${theme.radii.s};
      inline-size: 169px;
      block-size: 256px;
    }
    @media screen and (min-width: 1440px) {
      inline-size: 224px;
      block-size: 340px;
    }
  }

  h4 {
    margin-block-end: ${theme.spacing(2.5)};
    max-inline-size: 146px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    @media screen and (min-width: 768px) {
      margin-block-end: ${theme.spacing(2)};
      max-inline-size: 320px;
      font-size: 20px;
      line-height: 1;
    }
  }

  h5 {
    margin-block-end: ${theme.spacing(10)};
    color: ${theme.colors.lightgrey};
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
      margin-block-end: ${theme.spacing(8)};
      font-size: 14px;
      line-height: 1.285;
    }
    @media screen and (min-width: 768px) {
      margin-block-end: ${theme.spacing(12.5)};
    }
  }
`;

export const InfoBlock = styled.div`
  position: absolute;
  top: 560px;
  @media screen and (min-width: 768px) {
    top: 450px;
  }
  @media screen and (min-width: 1440px) {
    top: 200px;
  }
  span {
    color: ${theme.colors.light};
  }

  h5 {
    color: ${theme.colors.lightgrey};
  }
`;

export const BtnStartStop = styled.button`
  inline-size: 40px;
  block-size: 40px;
  border: none;
  background: transparent;
  border-radius: ${theme.radii.xxl};
  transition: 1s;

  &:is(:hover, :focus) {
    scale: 1.1;
  }

  @media screen and (min-width: 768px) {
    inline-size: 50px;
    block-size: 50px;
  }
  svg {
    inline-size: 40px;
    block-size: 40px;
    transition: 1s;
    @media screen and (min-width: 768px) {
      inline-size: 50px;
      block-size: 50px;
    }
  }
  svg:is(:hover, :focus) {
    scale: 1.1;
  }
`;
