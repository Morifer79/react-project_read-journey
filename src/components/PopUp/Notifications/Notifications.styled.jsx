import styled from 'styled-components';
import { theme } from '../../../styleset/theme';

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: ${theme.spacing(20)};
  inline-size: 335px;

  @media screen and (min-width: 768px) {
    padding-block: ${theme.spacing(15)};
    inline-size: 342px;
  }

  img {
    inline-size: 50px;
    block-size: 50px;
    margin-block-end: ${theme.spacing(10)};
    @media screen and (min-width: 768px) {
      inline-size: 68px;
      block-size: 70px;
      margin-block-end: ${theme.spacing(16)};
    }
  }

  h4 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin-block-end: ${theme.spacing(5)};
    @media screen and (min-width: 768px) {
      font-size: 20px;
      margin-block-end: ${theme.spacing(7)};
    }
  }

  h5 {
    max-width: 250px;
    text-align: center;
    color: ${theme.colors.lightgrey};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
    margin-block-end: ${theme.spacing(2)};
    span {
      color: ${theme.colors.light};
    }
  }
`;
