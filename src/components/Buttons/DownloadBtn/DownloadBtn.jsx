import PropTypes from 'prop-types';
import { saveAs } from 'file-saver';

const DownloadBtn = ({ downloadLink }) => (
  <button
    className="downBtn"
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      saveAs(downloadLink, 'Photo');
    }}
  >
    <svg
      width="32"
      height="32"
      className="c_c7b"
      viewBox="0 0 32 32"
      version="1.1"
      aria-hidden="false"
    >
      <path d="M25.8 15.5l-7.8 7.2v-20.7h-4v20.7l-7.8-7.2-2.7 3 12.5 11.4 12.5-11.4z" />
    </svg>
  </button>
);

export default DownloadBtn;

DownloadBtn.propTypes = {
  downloadLink: PropTypes.string.isRequired,
};
