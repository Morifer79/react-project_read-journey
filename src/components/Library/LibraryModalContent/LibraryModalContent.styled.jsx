import styled from 'styled-components';
import { theme } from '../../../styleset/theme';

export const ModalBody = styled.div`
  padding-block: ${theme.spacing(10)};
  inline-size: 335px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding-block: ${theme.spacing(15)};
    inline-size: 500px;
  }

  img {
    margin-block-end: ${theme.spacing(8)};
    inline-size: 137px;
    block-size: 208px;
    border-radius: ${theme.radii.s};

    @media screen and (min-width: 768px) {
      inline-size: 153px;
      block-size: 233px;
    }
  }

  h4 {
    margin-block-end: ${theme.spacing(1)};
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    text-align: center;

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  h5 {
    margin-block-end: ${theme.spacing(2)};
    color: ${theme.colors.lightgrey};
    font-size: 12px;
    line-height: 1.166;

    @media screen and (min-width: 768px) {
      font-size: 14px;
      line-height: 1.285;
    }
  }

  h6 {
    margin-block-end: ${theme.spacing(10)};
    font-size: 10px;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      margin-block-end: ${theme.spacing(16)};
    }
  }
`;
