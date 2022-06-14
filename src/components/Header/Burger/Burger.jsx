import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { windowWidthSelector } from '../../../store/selectors/window.selector';

import '../../../style/Burger.css';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import BurgerMenuMedium from './BurgerMenu/BurgerMenuMedium';

const Burger = ({
  isMenuOpen,
  setIsMenuOpen,
  isUserMenuOpen,
  setIsUserMenuOpen,
}) => {
  const screenWidth = useSelector(windowWidthSelector);

  return (
    <div className="burger">
      <div
        className="burger-btn"
        role="button"
        tabIndex={0}
        onClick={() => {
          if (isUserMenuOpen) {
            setIsUserMenuOpen(false);
            setIsMenuOpen(!isMenuOpen);
          }
          setIsMenuOpen(!isMenuOpen);
        }}
        onBlur={() => {
          setIsMenuOpen(false);
        }}
        onKeyDown={() => {}}
      >
        <svg
          width="24"
          height="24"
          className="BOTrp"
          viewBox="0 0 32 32"
          version="1.1"
          aria-hidden="false"
        >
          <path d="M4 21.3h24V24H4v-2.7zM4 8v2.7h24V8H4zm0 9.3h24v-2.7H4v2.7z" />
        </svg>
      </div>
      {screenWidth > 948 ? (
        <BurgerMenu isMenuOpen={isMenuOpen} />
      ) : (
        <BurgerMenuMedium isMenuOpen={isMenuOpen} />
      )}
    </div>
  );
};

export default Burger;

Burger.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  isUserMenuOpen: PropTypes.bool.isRequired,
  setIsUserMenuOpen: PropTypes.func.isRequired,
};
