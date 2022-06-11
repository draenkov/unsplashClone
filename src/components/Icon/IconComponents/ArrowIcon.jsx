import PropTypes from 'prop-types';

const ArrowIcon = ({ width, height, fill, className }) => (
  <svg
    className={className}
    width={`${width}px`}
    height={`${height}px`}
    fill={fill}
    viewBox="0 0 32 32"
    version="1.1"
    aria-hidden="false"
  >
    <path d="M9.9 11.5l6.1 6.1 6.1-6.1 1.9 1.9-8 8-8-8 1.9-1.9z" />
  </svg>
);

export default ArrowIcon;

ArrowIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

ArrowIcon.defaultProps = {
  fill: '#000000',
  className: '',
  width: 20,
  height: 20,
};
