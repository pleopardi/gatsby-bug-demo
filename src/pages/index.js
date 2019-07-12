import React from "react";
import { Link, graphql } from "gatsby";
import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { rhythm } from "../utils/typography";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.nodes;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(post => {
          const title = post.frontmatter.title;

          return (
            <div key={post.frontmatter.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={post.frontmatter.slug}>
                  {title}
                </Link>
              </h3>
              <small>{post.frontmatter.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: post.frontmatter.description || post.excerpt,
                }}
              />
            </div>
          );
        })}
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          slug
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
