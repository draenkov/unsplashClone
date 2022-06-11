export const splitIntoSides = (photos, columns) => {
  if (columns === 1) {
    const photosBySides = { left: [] };

    photosBySides.left = photos;
    return photosBySides;
  }
  if (columns === 2) {
    const photosBySides = { left: [], center: [] };

    photos.map((item) => {
      const { left, center } = photosBySides;
      if (left.length === center.length) {
        left.push(item);
      } else if (left.length > center.length) {
        center.push(item);
      }
      return null;
    });
    return photosBySides;
  }
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
