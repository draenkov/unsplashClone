export const debounce = (fn) => {
  let timerId;

  return () => {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(fn, 1100);
  };
};
