import styled from 'styled-components';
import { theme } from '../../../../../../styleset/theme';

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${theme.spacing(55)};

  @media screen and (min-width: 768px) {
    gap: ${theme.spacing(51)};
  }

  @media screen and (min-width: 1440px) {
    gap: ${theme.spacing(43)};
  }
`;

export const LeftSide = styled.div`
  position: relative;
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
    margin-block-end: ${theme.spacing(4)};
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

export const VerticalLine = styled.div`
  position: absolute;
  z-index: -1;
  width: 2px;
  height: 115%;
  left: 7px;
  background: ${theme.colors.primary};

  @media screen and (min-width: 768px) {
    left: 9px;
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
    inline-size: 46px;
    block-size: 18px;
    @media screen and (min-width: 768px) {
      inline-size: 59px;
      block-size: 24px;
    }
  }

  div h5 {
    max-inline-size: 46px;
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

export const Container = styled.div`
  padding-inline-start: ${theme.spacing(62.5)};
`;
