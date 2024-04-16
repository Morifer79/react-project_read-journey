import styled from 'styled-components';
import { theme } from '../../../../styleset/theme';

export const Booklist = styled.ul`
  @media screen and (max-width: 1439px) {
    justify-content: center;
  }
  margin: 0 auto;
  margin-block-start: ${theme.spacing(11)};
  display: flex;
  gap: ${theme.spacing(10.5)};

  @media screen and (min-width: 768px) {
    margin-block-start: ${theme.spacing(10)};
    flex-wrap: wrap;
    gap: ${theme.spacing(12.5)};
  }

  @media screen and (min-width: 1440px) {
    justify-content: space-between; // временно
    gap: ${theme.spacing(10)};
  }
`;
