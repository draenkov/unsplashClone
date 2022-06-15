import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FastMenuItem = ({ buttonTitle }) => (
  <li className="fastMenuItem">
    <Link to="/unsplashClone" className="fastMenu__link">
      {buttonTitle}
    </Link>
  </li>
);

export default FastMenuItem;

FastMenuItem.propTypes = {
  buttonTitle: PropTypes.string,
};

FastMenuItem.defaultProps = {
  buttonTitle: '',
};
