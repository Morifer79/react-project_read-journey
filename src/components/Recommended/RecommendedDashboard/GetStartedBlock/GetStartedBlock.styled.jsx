import styled from 'styled-components';
import { theme } from '../../../../styleset/theme';
import { NavLink } from 'react-router-dom';

export const GetStarted = styled.div`
  @media screen and (max-width: 767px) {
    margin-block-start: ${theme.spacing(10)};
  }
  padding: ${theme.spacing(10)};
  border-radius: ${theme.radii.m};
  background: ${theme.colors.secondary};

  h3 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    margin-block-end: ${theme.spacing(10)};

    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(10)};
  }

  ul li {
    display: flex;
    gap: ${theme.spacing(6)};
  }

  ul li:last-child {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SignNumber = styled.div`
  padding: ${theme.spacing(5.5)} ${theme.spacing(8)};
  inline-size: 40px;
  block-size: 40px;
  border-radius: ${theme.radii.xxl};
  background: ${theme.colors.light};

  @media screen and (min-width: 768px) {
    padding: ${theme.spacing(6.5)} ${theme.spacing(9)};
    inline-size: 44px;
    block-size: 44px;
  }

  span {
    color: ${theme.colors.primary};
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    @media screen and (min-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const SignText = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.285;

  span {
    color: ${theme.colors.lightgrey};
  }
`;

export const StyledLink = styled(NavLink)`
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
