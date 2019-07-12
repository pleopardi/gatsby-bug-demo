const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const PostTemplate = path.resolve(`./src/templates/Post.template.js`);

  return graphql(
    `
      query {
        allMdx {
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

    // Create blog posts pages.
    const posts = result.data.allMdx.nodes;

    posts.forEach((post, index) => {
      const next = index === 0 ? null : posts[index - 1].frontmatter;
      const previous =
        index === posts.length - 1 ? null : posts[index + 1].frontmatter;
      const slug = post.frontmatter.slug;

      createPage({
        path: slug,
        component: PostTemplate,
        context: {
          next,
          previous,
          slug,
        },
      });
    });
  });
};
