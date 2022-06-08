const AddBtn = () => (
  <button
    className="addColBtn"
    type="button"
    onClick={(e) => {
      e.stopPropagation();
    }}
  >
    <svg
      width="32"
      height="32"
      className="utUL6"
      viewBox="0 0 32 32"
      version="1.1"
      aria-hidden="false"
    >
      <path d="M14 3h4v26h-4zM29 14v4h-26v-4z" />
    </svg>
  </button>
);

export default AddBtn;
