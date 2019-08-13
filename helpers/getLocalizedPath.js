const { config } = require("../content/intl/config");

module.exports = function getLocalizedPath({ locale, path }) {
  const isDefaultLocale = locale === config.defaultLocale;

  const isIndex = path === "/";

  if (isIndex) {
    return isDefaultLocale ? "/" : `/${locale}`;
  }

  return isDefaultLocale ? path : `/${locale}${path}`;
};
