import PropTypes from 'prop-types';

const UserMenuItem = ({ item }) => (
  <li className="userMenu__item">
    <a href="/#">{item}</a>
  </li>
);

export default UserMenuItem;

UserMenuItem.propTypes = {
  item: PropTypes.string.isRequired,
};
