import React, { Fragment } from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import CssBaseline from "../components/CssBaseline";
import Footer from "../components/common/Footer.atom";
import PostLayout from "../components/PostLayout";
import Seo from "../components/common/Seo";
import Spacer from "../components/common/Spacer.atom";
import StyledLink from "../components/common/StyledLink.atom";

const styles = {
  authorWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "2rem",
  },
  navWrapper: {
    marginBottom: "0.6rem",
    marginTop: "0.6rem",
    display: "flex",
    flexWrap: "nowrap",
    justifyContent: "space-between",
  },
  subtitle: {
    fontSize: "0.8rem",
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
          <header>
            <StyledLink to="/">
              <h3>{siteTitle}</h3>
            </StyledLink>
          </header>
          <h1>{title}</h1>
          <p css={styles.subtitle}>
            {dateTimeFormatter.format(new Date(date))}, {author}
          </p>
          <Spacer height="1rem" />
          <MDXRenderer>{body}</MDXRenderer>
          <Spacer height="4rem" />
          <hr />
          <div css={styles.navWrapper}>
            {previous && (
              <StyledLink to={`/${previous.slug}`} rel="prev">
                ← {previous.title}
              </StyledLink>
            )}

            {next && (
              <StyledLink to={`/${next.slug}`} rel="next">
                {next.title} →
              </StyledLink>
            )}
          </div>
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
