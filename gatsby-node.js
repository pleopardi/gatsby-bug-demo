const path = require("path");
const { config, localesConfig } = require("./content/intl/config");
const {
  getLocaleFromFilePath,
  getLocalizedPath,
  getLocalizedSlug,
  getSlugFromFilePath,
  makeQueryPostsByLocale,
  removeTrailingSlashFromPath,
} = require("./helpers");

function createPages({ actions, graphql }) {
  const { createPage } = actions;

  const PostTemplate = path.resolve("./src/templates/Post.template.js");

  const queryPostsByLocale = makeQueryPostsByLocale(graphql);

  return Promise.all(
    config.locales.map(locale => {
      queryPostsByLocale(locale).then(result => {
        if (result.errors) {
          throw result.errors;
        }

        const posts = result.data.allMdx.nodes;

        posts.forEach((post, index) => {
          const next = index === 0 ? null : posts[index - 1].fields.slug;

          const nextTitle = next ? posts[index - 1].frontmatter.title : null;

          const previous =
            index === posts.length - 1 ? null : posts[index + 1].fields.slug;

          const previousTitle = previous
            ? posts[index + 1].frontmatter.title
            : null;

          const slug = post.fields.slug;

          createPage({
            component: PostTemplate,
            context: {
              dateFormat: localesConfig[locale].dateFormat,
              next,
              nextTitle,
              previous,
              previousTitle,
              slug,
            },
            path: `/${slug}`,
          });
        });
      });
    })
  );
}

function onCreateNode({ actions, node }) {
  if (node.internal.type === "Mdx") {
    const locale = getLocaleFromFilePath(node.fileAbsolutePath);

    actions.createNodeField({
      name: "locale",
      node,
      value: locale,
    });

    actions.createNodeField({
      name: "slug",
      node,
      value: getLocalizedSlug({
        locale,
        slug: getSlugFromFilePath(node.fileAbsolutePath),
      }),
    });
  }
}

function onCreatePage({ actions, page }) {
  const { createPage, deletePage } = actions;

  deletePage(page);

  config.locales.forEach(locale => {
    createPage({
      ...page,
      context: {
        ...page.context,
        dateFormat: localesConfig.it.dateFormat,
      },
      path: removeTrailingSlashFromPath(
        getLocalizedPath({
          locale,
          path: page.path,
        })
      ),
    });
  });
}

module.exports = {
  createPages,
  onCreateNode,
  onCreatePage,
};
