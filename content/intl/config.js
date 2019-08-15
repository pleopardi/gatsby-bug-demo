const config = {
  defaultLocale: "it",
  locales: ["it", "en"],
};

const localesConfig = {
  it: {
    dateFormat: "DD/MM/YYYY",
    name: "Italiano",
  },
  en: {
    dateFormat: "DD/MM/YYYY",
    name: "English",
  },
};

module.exports = {
  config,
  localesConfig,
};
