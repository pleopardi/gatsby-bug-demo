module.exports = function getSlugFromFilePath(fileAbsolutePath) {
  return fileAbsolutePath.split("/").slice(-2, -1);
};
