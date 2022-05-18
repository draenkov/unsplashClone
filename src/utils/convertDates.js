const convertDates = (date) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const publishedAt = new Date(date);
  return new Intl.DateTimeFormat('en-US', options).format(publishedAt);
};

export default convertDates;
