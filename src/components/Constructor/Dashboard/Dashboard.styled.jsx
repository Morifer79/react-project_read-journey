import styled from 'styled-components';
import { theme } from '../../../styleset/theme';

export const Section = styled.div`
  margin-block-end: ${theme.spacing(5)};
  padding: ${theme.spacing(10)};
  border-radius: ${theme.radii.xl};
  background: ${theme.colors.primary};

  @media screen and (min-width: 768px) {
    margin-block-end: ${theme.spacing(8)};
    padding: ${theme.spacing(16)};
    display: flex;
    gap: ${theme.spacing(16)};
  }

  @media screen and (min-width: 1440px) {
    margin-block-end: ${theme.spacing(0)};
    inline-size: 353px;
    flex-direction: column;
    padding: ${theme.spacing(20)} ${theme.spacing(10)} ${theme.spacing(10)};
  }
`;
