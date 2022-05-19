export const splitIntpSides = (photos) => {
  const photosBySides = { left: [], center: [], right: [] };

  photos.map((item) => {
    const { left, center, right } = photosBySides;
    if (left.length === center.length && left.length === right.length) {
      left.push(item);
    } else if (left.length > center.length) {
      center.push(item);
    } else if (left.length > right.length) {
      right.push(item);
    }
    return null;
  });
  return photosBySides;
};
