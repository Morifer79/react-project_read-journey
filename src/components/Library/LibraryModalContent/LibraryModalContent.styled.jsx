import styled from 'styled-components';
import { theme } from '../../../styleset/theme';

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: ${theme.spacing(10)};
  inline-size: 335px;

  @media screen and (min-width: 768px) {
    padding-block: ${theme.spacing(15)};
    inline-size: 500px;
  }

  img {
    inline-size: 137px;
    block-size: 208px;
    border-radius: ${theme.radii.s};
    margin-block-end: ${theme.spacing(8)};
    @media screen and (min-width: 768px) {
      inline-size: 153px;
      block-size: 233px;
    }
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    margin-block-end: ${theme.spacing(1)};
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  h5 {
    color: ${theme.colors.lightgrey};
    font-size: 12px;
    line-height: 1.166;
    margin-block-end: ${theme.spacing(2)};
    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.285;
    }
  }

  h6 {
    font-size: 10px;
    line-height: 1.2;
    margin-block-end: ${theme.spacing(10)};
    @media screen and (min-width: 768px) {
      margin-block-end: ${theme.spacing(16)};
    }
  }
`;
