import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-mdx";
import Bio from "../components/Bio";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import { rhythm, scale } from "../utils/typography";

class PostTemplate extends Component {
  render() {
    const post = this.props.data.mdx;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { next, previous } = this.props.pageContext;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <h1
          style={{
            marginTop: rhythm(1),
            marginBottom: 0,
          }}
        >
          {post.frontmatter.title}
        </h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
          }}
        >
          {post.frontmatter.date}
        </p>
        <div>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </div>
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    );
  }
}

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      code {
        body
      }
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
