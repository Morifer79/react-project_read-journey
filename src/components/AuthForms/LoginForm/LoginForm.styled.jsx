import styled from 'styled-components';
import { theme } from '../../../styleset/theme';

export const BtnLogin = styled.button`
  margin-block-start: ${theme.spacing(32)};
  margin-inline-end: ${theme.spacing(7)};
  padding: ${theme.spacing(6)} ${theme.spacing(22.5)};

  border: 1px solid transparent;
  border-radius: ${theme.radii.xl};
  background-color: ${theme.colors.light};
  transition: background-color ${theme.transition}, border ${theme.transition};

  &:is(:hover, :focus) {
    background-color: transparent;
    border: 1px solid ${theme.colors.brd};
  }

  @media screen and (min-width: 768px) {
    margin-block-start: ${theme.spacing(66)};
    margin-inline-end: ${theme.spacing(10)};
    padding: ${theme.spacing(8)} ${theme.spacing(27)};

    span {
      font-size: 20px;
      line-height: 1;
    }
  }

  span {
    color: ${theme.colors.primary};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.333;
    transition: color ${theme.transition};
  }

  &:is(:hover, :focus) span {
    color: ${theme.colors.light};
  }
`;
