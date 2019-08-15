module.exports = function getLocaleFromFilePath(fileAbsolutePath) {
  return fileAbsolutePath
    .split("/")
    .slice(-1)[0]
    .split(".")[1];
};
