import styled from 'styled-components';
import { theme } from '../../../../../styleset/theme';

export const Quotation = styled.p`
  @media screen and (max-width: 1439px) {
    display: none;
  }
  margin-block-start: ${theme.spacing(10)};
  max-inline-size: 293px;
  color: ${theme.colors.lightgrey};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;
`;

export const StatisticsBody = styled.div`
  position: relative;
  margin-block-start: ${theme.spacing(10)};
  padding: ${theme.spacing(10)};
  background-color: ${theme.colors.secondary};
  border-radius: ${theme.radii.m};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-block-start: ${theme.spacing(8)};
    padding: ${theme.spacing(14)};
  }
  @media screen and (min-width: 1440px) {
    padding: ${theme.spacing(10)};
  }

  span {
    position: absolute;
    top: 69px;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.111;
    @media screen and (min-width: 768px) {
      top: 87px;
      font-size: 20px;
      line-height: 1;
    }
    @media screen and (min-width: 1440px) {
      top: 100px;
    }
  }

  h4 {
    margin-block-end: ${theme.spacing(2)};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
    @media screen and (min-width: 768px) {
      margin-block-end: ${theme.spacing(4)};
      font-size: 20px;
      line-height: 1;
    }
  }

  h5 {
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

export const CircleWrapper = styled.div`
  margin-block-end: ${theme.spacing(10.5)};
  inline-size: 116px;
  block-size: 116px;
  @media screen and (min-width: 768px) {
    margin-block-end: ${theme.spacing(8)};
    inline-size: 138px;
    block-size: 138px;
  }
  @media screen and (min-width: 1440px) {
    margin-block: ${theme.spacing(5)} ${theme.spacing(10)};
    inline-size: 168px;
    block-size: 168px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${theme.spacing(7.5)};
`;

export const ProgressClr = styled.div`
  inline-size: 14px;
  block-size: 14px;
  border-radius: 4px;
  background-color: ${theme.colors.progress};
`;
