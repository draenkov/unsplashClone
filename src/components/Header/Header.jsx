import { useSelector } from 'react-redux';
import { useState } from 'react';
import Logo from './Logo/Logo';
import '../../style/Header.css';
import Form from './Form/Form';
import FastMenu from './FastMenu/FastMenu';
import AuthBtns from './AuthBtns/AuthBtns';
import SubmitBtn from './SubmitBtn/SubmitBtn';
import Burger from './Burger/Burger';

import { authSelector } from '../../store/selectors/auth.selector';
import UserMenu from './UserMenu/UserMenu';

const Header = () => {
  const isLoggedIn = useSelector(authSelector);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  return (
    <header className="header">
      <Logo />
      <Form />
      <FastMenu />
      {isLoggedIn ? null : <div className="v-line" />}
      <AuthBtns />
      <SubmitBtn />
      {!isLoggedIn ? null : (
        <UserMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          isUserMenuOpen={isUserMenuOpen}
          setIsUserMenuOpen={setIsUserMenuOpen}
        />
      )}
      <Burger
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isUserMenuOpen={isUserMenuOpen}
        setIsUserMenuOpen={setIsUserMenuOpen}
      />
    </header>
  );
};

export default Header;
