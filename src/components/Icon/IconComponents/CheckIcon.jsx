import PropTypes from 'prop-types';

const CheckIcon = ({ width, height, fill, className }) => {
  <svg
    className={className}
    width={`${width}px`}
    height={`${height}px`}
    fill={fill}
    viewBox="0 0 32 32"
    version="1.1"
    ariaHidden="false"
  >
    <path
      d="M13.3334 23.2l-6.66671-6.6667 1.86666-1.8667 4.80005
    4.8L23.4667 9.33331 25.3334 11.2l-12 12z"
    />
  </svg>;
};

export default CheckIcon;

CheckIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

CheckIcon.defaultProps = {
  fill: '#000000',
  className: '',
  width: 20,
  height: 20,
};
