import styled from 'styled-components';
import { theme } from '../../../styleset/theme';

export const Section = styled.div`
  padding: ${theme.spacing(20)} ${theme.spacing(10)};
  inline-size: 100%;
  border-radius: ${theme.radii.xl};
  background: ${theme.colors.primary};

  @media screen and (min-width: 768px) {
    padding: ${theme.spacing(20)};
  }

  h3 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;

    @media screen and (min-width: 768px) {
      font-size: 28px;
      line-height: 1.142;
    }
  }
`;
