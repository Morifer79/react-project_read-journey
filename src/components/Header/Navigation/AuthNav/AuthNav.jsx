import { NavMenu, StyledLink } from '../../Header.styled';

export const AuthNav = () => {
  return (
    <NavMenu>
      <li>
        <StyledLink to="/register">Register</StyledLink>
      </li>
      <li>
        <StyledLink to="/login">LogIn</StyledLink>
      </li>
    </NavMenu>
  );
};
