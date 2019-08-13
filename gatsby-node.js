const path = require("path");

function createPages({ actions, graphql }) {
  const { createPage } = actions;

  const PostTemplate = path.resolve("./src/templates/Post.template.js");

  return graphql(
    `
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            frontmatter {
              slug
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
      const next = index === 0 ? null : posts[index - 1].frontmatter;
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].frontmatter;
      const slug = post.frontmatter.slug;

      createPage({
        component: PostTemplate,
        context: {
          next,
          previous,
          slug,
        },
        path: slug,
      });
    });
  });
}

module.exports = {
  createPages,
};
