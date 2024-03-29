import React, { Fragment } from "react";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import CookieBanner from "../components/CookieBanner";
import CssBaseline from "../components/CssBaseline";
import { Footer, Seo, Spacer, StyledLink } from "../components/common";
import PostLayout from "../layouts/PostLayout";

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

function PostTemplate({ data, pageContext }) {
  const { author, date, description, title } = data.mdx.frontmatter;
  const { body } = data.mdx;
  const { next, nextTitle, previous, previousTitle } = pageContext;
  const { title: siteTitle } = data.site.siteMetadata;

  return (
    <Fragment>
      <Seo description={description} title={title} />
      <CssBaseline />
      <CookieBanner />
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
              {date}, {author}
            </p>
          </header>
          <article>
            <MDXRenderer>{body}</MDXRenderer>
          </article>
          <Spacer height="3rem" />
          <hr />
          <nav css={styles.navWrapper}>
            {previous ? (
              <Link to={`/${previous}`} rel="prev">
                ← {previousTitle}
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={`/${next}`} rel="next">
                {nextTitle} →
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
  query BlogPostBySlug($dateFormat: String!, $slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        author
        date(formatString: $dateFormat)
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
