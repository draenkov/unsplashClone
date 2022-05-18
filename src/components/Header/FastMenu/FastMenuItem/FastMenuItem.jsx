import PropTypes from 'prop-types';

const FastMenuItem = ({ buttonTitle }) => (
  <li className="fastMenuItem">
    <a href="/#" className="fastMenu__link">
      {buttonTitle}
    </a>
  </li>
);

export default FastMenuItem;

FastMenuItem.propTypes = {
  buttonTitle: PropTypes.string,
};

FastMenuItem.defaultProps = {
  buttonTitle: '',
};
