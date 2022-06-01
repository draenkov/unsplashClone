export const svgConverter = (svgName, svgObject) => {
  if (!svgName) {
    return null;
  }
  return svgObject[svgName].type;
};
