module.exports = function removeTrailingSlashFromPath(path) {
  return path === "/" ? path : path.replace(/\/$/, "");
};
