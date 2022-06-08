const InfoBtn = () => (
  <button
    className="infoBtn"
    type="button"
    onClick={(e) => {
      e.stopPropagation();
    }}
  >
    <svg
      width="32"
      height="32"
      className="VryqT"
      viewBox="0 0 32 32"
      version="1.1"
      aria-hidden="false"
    >
      <path
        d="M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2
      16-16-7.2-16-16-16zm2 25c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-12c0-.6.4-1
      1-1h2c.6 0 1 .4 1 1v12zm0-16c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-2c0-.6.4-1
      1-1h2c.6 0 1 .4 1 1v2z"
      />
    </svg>
    <span>Info</span>
  </button>
);

export default InfoBtn;
