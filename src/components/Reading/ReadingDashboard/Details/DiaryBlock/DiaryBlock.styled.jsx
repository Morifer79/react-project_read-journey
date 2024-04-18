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
    transition: stroke ${theme.transition};
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
    max-block-size: 373px;
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
    height: 100%;
    left: 25px;
    right: 295px;
    bottom: -61px;
  }

  @media screen and (min-width: 1440px) {
    height: 100%;
    left: 29px;
  }
`;
