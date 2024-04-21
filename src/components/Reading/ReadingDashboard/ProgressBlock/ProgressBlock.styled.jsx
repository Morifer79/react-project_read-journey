import styled from 'styled-components';
import { theme } from '../../../../styleset/theme';

export const Progress = styled.div`
  @media screen and (max-width: 767px) {
    margin-block-start: ${theme.spacing(20)};
  }
  max-width: 320px;
  h3 {
    margin-block-end: ${theme.spacing(7)};
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
  }

  p {
    margin-block-end: ${theme.spacing(10)};
    color: ${theme.colors.lightgrey};
    font-size: 14px;
    font-weight: 500;
    line-height: 1.285;
    @media screen and (min-width: 768px) {
      inline-size: 313px;
    }
  }

  img {
    margin: 0 auto;
    padding: ${theme.spacing(12)};
    border-radius: ${theme.radii.xxl};
    background-color: ${theme.colors.secondary};
    inline-size: 80px;
    block-size: 80px;
  }
`;
