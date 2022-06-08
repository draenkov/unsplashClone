const ShareBtn = () => (
  <button
    className="shareBtn"
    type="button"
    onClick={(e) => {
      e.stopPropagation();
    }}
  >
    <svg
      width="32"
      height="32"
      className="Vftfb"
      viewBox="0 0 32 32"
      version="1.1"
      aria-hidden="false"
    >
      <path d="M16 26v-7C7.1 19 1.6 27.7 0 31 0 20 3.6 8.8 16 7V0l16 13.3L16 26z" />
    </svg>
    <span>Share</span>
  </button>
);

export default ShareBtn;
