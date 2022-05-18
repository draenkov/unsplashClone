import Logo from './Logo/Logo';
import '../../style/Header.css';
import Form from './Form/Form';
import FastMenu from './FastMenu/FastMenu';
import AuthBtns from './AuthBtns/AuthBtns';
import SubmitBtn from './SubmitBtn/SubmitBtn';
import Burger from './Burger/Burger';

const Header = () => (
  <header className="header">
    <Logo />
    <Form />
    <FastMenu />
    <div className="v-line" />
    <AuthBtns />
    <SubmitBtn />
    <Burger />
  </header>
);

export default Header;
