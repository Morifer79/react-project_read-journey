import styled from 'styled-components';
import { theme } from '../../../../../styleset/theme';

export const FlexWrapper = styled.div`
  @media screen and (max-width: 767px) {
    margin-block-start: ${theme.spacing(20)};
  }

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
  block-size: 211px;
  margin-block-start: ${theme.spacing(10)};
  padding: ${theme.spacing(8)};
  overflow-y: auto;
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.radii.m};
  @media screen and (min-width: 768px) {
    margin-block-start: ${theme.spacing(8)};
    block-size: 252px;
  }
  @media screen and (min-width: 1440px) {
    padding: ${theme.spacing(10)};
    block-size: 373px;
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
