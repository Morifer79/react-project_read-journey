import styled from 'styled-components';
import { theme } from '../../../styleset/theme';

export const ImageBox = styled.div`
  margin-block-start: ${theme.spacing(10)};
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-block-start: ${theme.spacing(16)};
  }

  @media screen and (min-width: 1440px) {
    margin-block-start: ${theme.spacing(22)};
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

export const BtnStartStop = styled.button`
  inline-size: 40px;
  block-size: 40px;
  border: none;
  background: transparent;
  border-radius: ${theme.radii.xxl};
  cursor: auto;
  transition: 1s;

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
`;

export const CommonThumb = styled.div`
  margin-block-end: ${theme.spacing(12.5)};
  position: relative;
  inline-size: 224px;
  block-size: 340px;
  transition: transform 0.8s;
  transform-style: preserve-3d;

  @media screen and (min-width: 768px) {
    margin-block-end: ${theme.spacing(12.5)};
  }

  &:is(:hover, :focus) {
    transform: rotateY(-180deg);
  }

  img {
    border-radius: ${theme.radii.s};
    inline-size: 137px;
    block-size: 208px;
    @media screen and (min-width: 768px) {
      inline-size: 169px;
      block-size: 256px;
    }
    @media screen and (min-width: 1440px) {
      inline-size: 224px;
      block-size: 340px;
    }
  }
`;

export const FrontSide = styled.div`
  backface-visibility: hidden;
`;

export const BackSide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: ${theme.radii.s};
  backface-visibility: hidden;
  line-height: 1.29;

  transform: rotateY(-180deg);
  transition: transform ${theme.transition};

  &.is-hidden {
    opacity: 0;
    visibility: hidden;
  }
`;
