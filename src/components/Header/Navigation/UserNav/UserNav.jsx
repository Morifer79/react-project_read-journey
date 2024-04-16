import { NavMenu, StyledLink } from '../../Header.styled';

export const UserNav = () => {
  return (
    <NavMenu>
      <li>
        <StyledLink to="/recommended">Home</StyledLink>
      </li>
      <li>
        <StyledLink to="/library">My library</StyledLink>
      </li>
    </NavMenu>
  );
};
