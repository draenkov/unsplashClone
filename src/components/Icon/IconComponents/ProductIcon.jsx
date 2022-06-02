import PropTypes from 'prop-types';

const ProductIcon = ({ width, height, fill, className }) => (
  <svg
    className={className}
    width={`${width}px`}
    height={`${height}px`}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <g
      clipRule="evenodd"
      stroke="#111"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M14 17.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5
      3.5-3.5-.875-3.5-3.5zM3 17.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011
      3.5-3.5 3.5S3 20.125 3 17.5z"
      />
      <path
        opacity=".5"
        d="M14 6.5c0-2.625.028-3.5 3.5-3.5s3.5.875 3.5 3.5.011 3.5-3.5 3.5S14 9.125 14 6.5z"
      />
      <path d="M3 6.5C3 3.875 3.028 3 6.5 3s3.5.875 3.5 3.5.011 3.5-3.5 3.5S3 9.125 3 6.5z" />
    </g>
  </svg>
);

export default ProductIcon;

ProductIcon.propTypes = {
  fill: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

ProductIcon.defaultProps = {
  fill: '#000000',
  className: '',
  width: 20,
  height: 20,
};
