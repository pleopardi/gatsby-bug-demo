import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import CssBaseline from "../components/CssBaseline";
import Footer from "../components/common/Footer.atom";
import PostLayout from "../components/PostLayout";
import Seo from "../components/common/Seo";
import Spacer from "../components/common/Spacer.atom";
import StyledLink from "../components/common/StyledLink.atom";

const styles = {
  home: {
    fontSize: 20,
    fontWeight: 600,
  },
  homeLink: {
    color: "inherit",
  },
  navWrapper: {
    marginBottom: "0.6rem",
    marginTop: "0.6rem",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  postDetails: {
    fontSize: "0.9rem",
    fontWeight: 600,
    marginTop: "0.8rem",
  },
};

const dateTimeFormatter = new Intl.DateTimeFormat("it-IT");

function PostTemplate({ data, pageContext }) {
  const { author, date, description, title } = data.mdx.frontmatter;
  const { body } = data.mdx;
  const { next, previous } = pageContext;
  const { title: siteTitle } = data.site.siteMetadata;

  return (
    <Fragment>
      <Seo description={description} title={title} />
      <CssBaseline />
      <PostLayout>
        <Fragment>
          <nav>
            <StyledLink style={styles.homeLink} to="/">
              <p style={styles.home}>{siteTitle}</p>
            </StyledLink>
          </nav>
          <header>
            <h1>{title}</h1>
            <p style={styles.postDetails}>
              {dateTimeFormatter.format(new Date(date))}, {author}
            </p>
          </header>
          <article>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
          <Spacer height="3rem" />
          <hr />
          <nav css={styles.navWrapper}>
            {previous ? (
              <Link to={`/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={`/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            )}
          </nav>
          <Spacer height="4rem" />
          <Footer />
        </Fragment>
      </PostLayout>
    </Fragment>
  );
}

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        date
        description
        title
      }
      body
    }
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
