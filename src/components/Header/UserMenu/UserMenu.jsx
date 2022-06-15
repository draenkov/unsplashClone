import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { setAccessToken } from '../../../store/actions/photo/auth.actions';

import UserMenuItem from './UserMenuItem/UserMenuItem';

const UserMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  isUserMenuOpen,
  setIsUserMenuOpen,
}) => {
  const userMenuItems = ['View profile', 'Stats', 'Account settings'];
  const dispatch = useDispatch();

  return (
    <div className="userInfo">
      <div
        className="userInfo__avatar"
        role="button"
        onClick={() => {
          if (isMenuOpen) {
            setIsMenuOpen(false);
            setIsUserMenuOpen(!isUserMenuOpen);
          }

          setIsUserMenuOpen(!isUserMenuOpen);
        }}
        onBlur={() => {
          setIsUserMenuOpen(false);
        }}
        tabIndex={0}
        onKeyDown={() => {}}
      >
        <img
          src="https://st3.depositphotos.com/1767687/16607/v/380/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg?forcejpeg=true"
          alt=""
        />
      </div>

      <div
        className={isUserMenuOpen ? 'userMenu' : 'hiddenUserMenu'}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        role="button"
        tabIndex={0}
      >
        <div className="userMenu__angle">
          <div className="angle__wrapper" />
          <div className="angle__content" />
        </div>
        <div className="userMenu__content">
          <ul>
            {userMenuItems.map((item) => (
              <UserMenuItem item={item} key={item} />
            ))}
          </ul>

          <hr className="g-line" />
          <Link
            to="/unsplashClone"
            className="userMenu__logout"
            onClick={() => {
              dispatch(setAccessToken(null));
            }}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;

UserMenu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  setIsMenuOpen: PropTypes.func.isRequired,
  isUserMenuOpen: PropTypes.bool.isRequired,
  setIsUserMenuOpen: PropTypes.func.isRequired,
};
