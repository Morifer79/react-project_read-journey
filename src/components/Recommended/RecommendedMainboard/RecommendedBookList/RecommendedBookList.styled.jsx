import styled from 'styled-components';
import { theme } from '../../../../styleset/theme';

export const Booklist = styled.ul`
  margin-block-start: ${theme.spacing(11)};
  display: grid;
  grid-template: 248px / repeat(2, 137px);
  gap: ${theme.spacing(10.5)};
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin-block-start: ${theme.spacing(10)};
    grid-template: repeat(2, 248px) / repeat(4, 137px);
    gap: ${theme.spacing(13.5)} ${theme.spacing(12.5)};
  }
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template: repeat(2, 248px) / repeat(5, 137px);
    gap: ${theme.spacing(13.5)} ${theme.spacing(10)};
  }
`;
