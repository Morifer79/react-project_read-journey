import styled from 'styled-components';
import { theme } from '../../../../../styleset/theme';

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const BtnBox = styled.div`
  display: flex;
  gap: ${theme.spacing(4)};
`;

export const BtnDetails = styled.button`
  inline-size: 16px;
  block-size: 16px;
  background-color: transparent;
  border: none;

  @media screen and (min-width: 768px) {
    inline-size: 20px;
    block-size: 20px;
  }

  svg {
    inline-size: 16px;
    block-size: 16px;
    @media screen and (min-width: 768px) {
      inline-size: 20px;
      block-size: 20px;
    }
  }

  svg:is(:hover, :focus, :active) {
    stroke: ${theme.colors.light};
  }
`;

export const DiaryBody = styled.div`
  position: relative;
  margin-block-start: ${theme.spacing(10)};
  padding: ${theme.spacing(8)};
  max-block-size: 211px;
  overflow-y: auto;
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.radii.m};
  @media screen and (min-width: 768px) {
    margin-block-start: ${theme.spacing(8)};
    max-block-size: 252px;
  }
  @media screen and (min-width: 1440px) {
    padding: ${theme.spacing(10)};
    max-block-size: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(8.5)};
    @media screen and (min-width: 768px) {
      gap: ${theme.spacing(7)};
    }
    @media screen and (min-width: 1440px) {
      gap: ${theme.spacing(11)};
    }
  }

  ul li {
    display: flex;
    justify-content: space-between;
  }
`;

export const VerticalLine = styled.div`
  position: absolute;
  width: 2px;
  height: 298px;
  left: 23px;
  right: 270px;
  top: 21px;
  bottom: -102px;
  background: ${theme.colors.primary};

  @media screen and (min-width: 768px) {
    height: 328px;
    left: 25px;
    right: 295px;
    bottom: -61px;
  }

  @media screen and (min-width: 1440px) {
    left: 29px;
  }
`;

export const LeftSide = styled.div`
  z-index: 1;
  display: flex;
  gap: ${theme.spacing(5)};

  svg {
    inline-size: 16px;
    block-size: 16px;
    @media screen and (min-width: 768px) {
      inline-size: 20px;
      block-size: 20px;
    }
  }

  div h4 {
    margin-block-end: ${theme.spacing(8.5)};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.333;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.285;
    }
  }

  div h5 {
    margin-block-end: ${theme.spacing(2)};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1;
    }
  }

  div h6 {
    margin-block-end: ${theme.spacing(2)};
    color: ${theme.colors.lightgrey};
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
      font-size: 12px;
      line-height: 1.166;
    }
  }
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(3)};
  @media screen and (min-width: 768px) {
    gap: ${theme.spacing(4)};
  }

  div h4 {
    margin-block-end: ${theme.spacing(8)};
    color: ${theme.colors.lightgrey};
    font-size: 12px;
    font-weight: 500;
    line-height: 1.333;
    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.285;
    }
  }

  div svg {
    margin-block-end: ${theme.spacing(3.5)};
    inline-size: 43px;
    block-size: 18px;
    @media screen and (min-width: 768px) {
      inline-size: 59px;
      block-size: 24px;
    }
  }

  div h5 {
    max-inline-size: 43px;
    color: ${theme.colors.lightgrey};
    font-size: 10px;
    font-weight: 500;
    line-height: 1.2;
    @media screen and (min-width: 768px) {
      max-inline-size: 59px;
      font-size: 12px;
      line-height: 1.166;
    }
  }
`;

export const BtnDel = styled.button`
  inline-size: 14px;
  block-size: 14px;
  background: transparent;
  border: none;

  svg {
    inline-size: 14px;
    block-size: 14px;
    stroke: ${theme.colors.lightgrey};
    fill: transparent;
    transition: stroke ${theme.transition};
  }

  svg:is(:hover, :focus, :active) {
    stroke: ${theme.colors.accent};
  }
`;
