const { config } = require("../content/intl/config");

module.exports = function getLocalizedSlug({ locale, slug }) {
  return locale === config.defaultLocale ? slug : `${locale}/${slug}`;
};
