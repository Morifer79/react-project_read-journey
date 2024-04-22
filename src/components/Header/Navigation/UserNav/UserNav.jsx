import { NavMenu, StyledLink } from '../../Header.styled';

export const UserNav = ({onClose}) => {
  return (
    <NavMenu onClick={onClose}>
      <li>
        <StyledLink to="/recommended">
          Home
        </StyledLink>
      </li>
      <li>
        <StyledLink to="/library">
          My library
        </StyledLink>
      </li>
    </NavMenu>
  );
};
