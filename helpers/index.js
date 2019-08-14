const getLocaleFromFilePath = require("./getLocaleFromFilePath");
const getLocalizedPath = require("./getLocalizedPath");
const getLocalizedSlug = require("./getLocalizedSlug");
const getSlugFromFilePath = require("./getSlugFromFilePath");
const makeQueryPostsByLocale = require("./makeQueryPostsByLocale");
const removeTrailingSlashFromPath = require("./removeTrailingSlashFromPath");

module.exports = {
  getLocaleFromFilePath,
  getLocalizedPath,
  getLocalizedSlug,
  getSlugFromFilePath,
  makeQueryPostsByLocale,
  removeTrailingSlashFromPath,
};
