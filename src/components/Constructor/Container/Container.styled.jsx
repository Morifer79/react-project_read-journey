import styled from 'styled-components';
import { theme } from '../../../styleset/theme';

export const Wrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: ${theme.spacing(8)};
  }
`;
