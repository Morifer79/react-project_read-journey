import SpriteIcons from '../../images/sprite.svg';
import logo from '../../images/logo.png';
import { Logo } from '../AuthForms/RegisterForm/RegisterForm.styled';
import { Navigation } from './Navigation/Navigation';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from '../../redux/auth/authOperations';
import {
  UserAvatar,
  HeaderWrapper,
  LogoBox,
  FlexWrapper,
  BtnMenu,
  MobileMenu,
  BtnLogout,
  MobileBtnLogout,
} from './Header.styled';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();
  const firstLetter = user?.name?.slice(0, 1);

  const toggleMenu = () => {
    setIsMenuOpen(prevMenuOpen => !prevMenuOpen);
  };

  return (
    <HeaderWrapper>
      <LogoBox>
        <Logo src={logo} />
        <span>read journey</span>
      </LogoBox>
      <Navigation />
      {isLoggedIn && (
        <FlexWrapper>
          <UserAvatar>
            <span>{firstLetter}</span>
          </UserAvatar>
          <h4>{user.name}</h4>
          <BtnLogout type="button" onClick={() => dispatch(logOut())}>
            <span>Log out</span>
          </BtnLogout>
        </FlexWrapper>
      )}
      {isMenuOpen ? (
        <>
          <BtnMenu type="button" onClick={toggleMenu}>
            <svg width="28" height="28">
              <use xlinkHref={`${SpriteIcons}#icon-x`} />
            </svg>
          </BtnMenu>
          <MobileMenu>
            <Navigation />
            {isLoggedIn && (
              <MobileBtnLogout type="button" onClick={() => dispatch(logOut())}>
                <span>Log out</span>
              </MobileBtnLogout>
            )}
          </MobileMenu>
        </>
      ) : (
        <BtnMenu type="button" onClick={toggleMenu}>
          <svg width="28" height="28">
            <use xlinkHref={`${SpriteIcons}#icon-menu`} />
          </svg>
        </BtnMenu>
      )}
    </HeaderWrapper>
  );
};
