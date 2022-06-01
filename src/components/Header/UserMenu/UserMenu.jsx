import PropTypes from 'prop-types';
import UserMenuItem from './UserMenuItem/UserMenuItem';

const UserMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  isUserMenuOpen,
  setIsUserMenuOpen,
}) => {
  const userMenuItems = ['View profile', 'Stats', 'Account settings'];

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
        tabIndex={0}
        onKeyDown={() => {}}
      >
        <img
          src="https://st3.depositphotos.com/1767687/16607/v/380/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg?forcejpeg=true"
          alt=""
        />
      </div>

      <div className={isUserMenuOpen ? 'userMenu' : 'hiddenUserMenu'}>
        <div className="userMenu__angle">
          <div className="angle__wrapper" />
          <div className="angle__content" />
        </div>
        <div className="userMenu__content">
          <ul>
            {userMenuItems.map((item) => (
              <UserMenuItem item={item} />
            ))}
          </ul>

          <hr className="g-line" />
          <a href="/#" className="userMenu__logout">
            Logout
          </a>
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
