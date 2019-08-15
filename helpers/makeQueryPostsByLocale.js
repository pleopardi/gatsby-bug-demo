module.exports = function makeQueryPostsByLocale(graphql) {
  return function queryPostsByLocale(locale) {
    return graphql(`
      query {
        allMdx(filter: {fields: {locale: {eq: "${locale}"}}}, sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    `);
  };
};
