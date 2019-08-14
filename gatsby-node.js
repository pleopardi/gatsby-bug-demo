const path = require("path");
const { config, localesConfig } = require("./content/intl/config");
const { getLocalizedPath, getSlugFromFilePath } = require("./helpers");

function createPages({ actions, graphql }) {
  const { createPage } = actions;

  const PostTemplate = path.resolve("./src/templates/Post.template.js");

  return graphql(
    `
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
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
    `
  ).then(result => {
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
          dateFormat: localesConfig.it.dateFormat,
          next,
          nextTitle,
          previous,
          previousTitle,
          slug,
        },
        path: slug,
      });
    });
  });
}

function onCreateNode({ actions, node }) {
  if (node.internal.type === "Mdx") {
    actions.createNodeField({
      name: "slug",
      node,
      value: getSlugFromFilePath(node.fileAbsolutePath),
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
      path: getLocalizedPath({
        locale,
        path: page.path,
      }),
    });
  });
}

module.exports = {
  createPages,
  onCreateNode,
  onCreatePage,
};
