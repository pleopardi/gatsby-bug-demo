const { config } = require("../content/intl/config");

/**
 * @description Localizes a path by prefixing the locale.
 * When the locale is the default one, it returns the input path unchanged.
 * Do not use with already localized paths or slugs!
 */
module.exports = function getLocalizedPath({ locale, path }) {
  const isDefaultLocale = locale === config.defaultLocale;

  const isIndex = path === "/";

  if (isIndex) {
    return isDefaultLocale ? "/" : `/${locale}`;
  }

  return isDefaultLocale ? path : `/${locale}${path}`;
};
