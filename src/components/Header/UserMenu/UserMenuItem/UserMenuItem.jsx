import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserMenuItem = ({ item }) => (
  <li className="userMenu__item">
    <Link to="/unsplashClone">{item}</Link>
  </li>
);

export default UserMenuItem;

UserMenuItem.propTypes = {
  item: PropTypes.string.isRequired,
};
