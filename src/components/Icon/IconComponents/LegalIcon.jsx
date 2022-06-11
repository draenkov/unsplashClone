import PropTypes from 'prop-types';

const LegalIcon = ({ width, height, fill, className }) => (
  <svg
    className={className}
    width={`${width}px`}
    height={`${height}px`}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path
      opacity=".5"
      d="M15.716 16.223h-7.22M15.716 12.037h-7.22M11.251 7.86H8.496"
      stroke="#111"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M15.909 2.75l-7.69.004c-2.76.017-4.468 1.833-4.468 4.603v9.196c0 2.784 1.722 4.607 4.506 4.607l7.689-.003c2.76-.017 4.47-1.834 4.47-4.604V7.357c0-2.784-1.723-4.607-4.507-4.607z"
      stroke="#111"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LegalIcon;

LegalIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

LegalIcon.defaultProps = {
  fill: '#000000',
  className: '',
  width: 20,
  height: 20,
};
