import styled from 'styled-components';
import { theme } from '../../../../styleset/theme';
import { NavLink } from 'react-router-dom';

export const RecommendedBooks = styled.div`
  @media screen and (max-width: 767px) {
    margin-block-start: ${theme.spacing(10)};
  }

  @media screen and (min-width: 1440px) {
    margin-block-start: ${theme.spacing(39)};
  }
  padding: ${theme.spacing(10)};
  border-radius: ${theme.radii.m};
  background: ${theme.colors.secondary};

  h3 {
    margin-block-end: ${theme.spacing(7)};
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
  }
`;

export const RecommendedBookslist = styled.ul`
  margin-block-end: ${theme.spacing(8.5)};
  display: flex;
  gap: ${theme.spacing(10)};

  li img {
    margin-block-end: ${theme.spacing(4)};
    inline-size: 71px;
    block-size: 107px;
    border-radius: ${theme.radii.s};
  }

  li h4 {
    margin-block-end: ${theme.spacing(1)};
    font-size: 10px;
    font-weight: 700;
    line-height: 1.2;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-inline-size: 71px;
  }

  li h5 {
    color: ${theme.colors.lightgrey};
    font-size: 10px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-inline-size: 71px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.lightgrey};
  font-size: 14px;
  line-height: 1.285;
  text-decoration-line: underline;
  text-underline-offset: 3px;
  transition: color ${theme.transition};

  &:is(.active, :hover, :focus) {
    color: ${theme.colors.light};
  }
`;