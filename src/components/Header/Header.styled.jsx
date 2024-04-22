import styled from 'styled-components';
import { theme } from '../../styleset/theme';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.div`
  margin-block-end: ${theme.spacing(5)};
  padding: ${theme.spacing(5.5)} ${theme.spacing(10)};

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${theme.colors.primary};
  border-radius: ${theme.radii.l};

  @media screen and (min-width: 768px) {
    margin-block-end: ${theme.spacing(8)};
  }
`;

export const LogoBox = styled.div`
  span {
    display: none;
    margin-inline-start: ${theme.spacing(2)};
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;

    @media screen and (min-width: 1440px) {
      display: inline-block;
    }
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing(5)};

  h4 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.125;
    @media screen and (max-width: 1439px) {
      display: none;
    }
  }
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  inline-size: 35px;
  block-size: 35px;
  background-color: transparent;
  border: 1px solid ${theme.colors.brd};
  border-radius: ${theme.radii.xxl};

  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
  }

  @media screen and (min-width: 768px) {
    inline-size: 40px;
    block-size: 40px;
  }
`;

export const BtnMenu = styled.button`
  inline-size: 40px;
  block-size: 40px;
  background: transparent;
  border: none;
  z-index: 2;

  &:is(:hover, :focus) {
    scale: 1.1;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  @media screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    right: -200px;
    z-index: 1;

    inline-size: 200px;
    block-size: 100%;

    background-color: ${theme.colors.secondary};
    animation: fade-in 0.5s forwards;

    @keyframes fade-in {
      0% {
        width: 100px;
      }
      100% {
        width: 200px;
      }
    }

    ul {
      block-size: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${theme.spacing(10)};
    }

    &.active {
      transform: translateX(-100%);
    }
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  padding-block-end: ${theme.spacing(4)};
  color: ${theme.colors.lightgrey};
  font-size: 16px;
  line-height: 1.125;
  transition: color ${theme.transition};

  &:is(.active, :hover, :focus) {
    color: ${theme.colors.light};
  }

  &.active::after,
  &:hover::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: ${theme.colors.active};
    border-radius: ${theme.radii.m};
  }
`;

export const BtnLogout = styled.button`
  @media screen and (max-width: 767px) {
    display: none;
  }
  padding: ${theme.spacing(5)} ${theme.spacing(10)};
  background-color: transparent;
  border: 1px solid ${theme.colors.brd};
  border-radius: ${theme.radii.xl};
  transition:
    background-color ${theme.transition},
    border ${theme.transition};

  &:is(:hover, :focus) {
    background-color: ${theme.colors.light};
    border: 1px solid transparent;
    span {
      color: ${theme.colors.primary};
    }
  }

  span {
    color: ${theme.colors.light};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    transition: color ${theme.transition};
  }
`;

export const MobileBtnLogout = styled.button`
  @media screen and (max-width: 767px) {
    position: absolute;
    bottom: 40px;
    left: 30%;
  }
  padding: ${theme.spacing(5)} ${theme.spacing(10)};
  background-color: transparent;
  border: 1px solid ${theme.colors.brd};
  border-radius: ${theme.radii.xl};
  transition:
    background-color ${theme.transition},
    border ${theme.transition};

  &:is(:hover, :focus) {
    background-color: ${theme.colors.light};
    border: 1px solid transparent;
    span {
      color: ${theme.colors.primary};
    }
  }

  span {
    color: ${theme.colors.light};
    font-size: 14px;
    font-weight: 700;
    line-height: 1.285;
    transition: color ${theme.transition};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  gap: ${theme.spacing(16)};
  @media screen and (max-width: 767px) {
    display: none;
  }
`;