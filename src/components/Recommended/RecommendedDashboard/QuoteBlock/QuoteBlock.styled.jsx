import styled from 'styled-components';
import { theme } from '../../../../styleset/theme';

export const Quote = styled.div`
  padding: ${theme.spacing(7)} ${theme.spacing(10)};

  border-radius: ${theme.radii.m};
  background-color: ${theme.colors.secondary};

  display: flex;
  gap: ${theme.spacing(7)};

  font-size: 14px;
  line-height: 1.285;
  color: ${theme.colors.lightgrey};

  span {
    color: ${theme.colors.light};
  }

  @media screen and (max-width: 1439px) {
    display: none;
  }
`;
