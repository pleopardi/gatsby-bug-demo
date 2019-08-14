import React, { Fragment } from "react";
import { graphql } from "gatsby";
import CookieBanner from "../components/CookieBanner";
import CssBaseline from "../components/CssBaseline";
import { Footer, Seo, Spacer, StyledLink } from "../components/common";
import HomeLayout from "../layouts/HomeLayout";
import Logo from "../../content/assets/logo.svg";
import PostCard from "../components/home/PostCard";
import PostsList from "../components/home/PostsList";

const styles = {
  blogTitleLink: {
    textDecoration: "none",
  },
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: "2.4rem",
  },
  logo: {
    height: "4rem",
    width: "4rem",
  },
};

function BlogIndex({ data, pageContext }) {
  const locale = pageContext.locale;
  const firstPost = data.firstPost.nodes[0];
  const { description } = data.translations.nodes[0].messages[locale];
  const otherPosts = data.otherPosts.nodes;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Fragment>
      <Seo description={description} lang={locale} title="Home" />
      <CssBaseline />
      <CookieBanner />
      <HomeLayout>
        <header css={styles.header}>
          <Logo css={styles.logo} />
          <Spacer width="1rem" />
          <StyledLink style={styles.blogTitleLink} to="/">
            <h1>{siteTitle}</h1>
          </StyledLink>
        </header>
        <main>
          <PostCard post={firstPost} style={{ marginBottom: 0 }} />
          <Spacer height="4rem" />
          <hr />
          <Spacer height="4rem" />
          <PostsList posts={otherPosts} />
        </main>
        <Spacer height="4rem" />
        <Footer />
      </HomeLayout>
    </Fragment>
  );
}

// TODO: add propTypes

export default BlogIndex;

export const pageQuery = graphql`
  query getPageData($dateFormat: String!, $locale: String!) {
    firstPost: allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      limit: 1
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          author
          date(formatString: $dateFormat)
          description
          image {
            sharp: childImageSharp {
              fluid(maxHeight: 524, maxWidth: 928) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          tags
          title
        }
      }
    }
    otherPosts: allMdx(
      filter: { fields: { locale: { eq: $locale } } }
      skip: 1
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          author
          date(formatString: $dateFormat)
          description
          image {
            sharp: childImageSharp {
              fluid(maxHeight: 248, maxWidth: 440) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          tags
          title
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    translations: allFile(
      filter: {
        extension: { eq: "json" }
        name: { eq: "index" }
        sourceInstanceName: { eq: "intl" }
      }
    ) {
      nodes {
        messages: childTranslationsJson {
          en {
            description
          }
          it {
            description
          }
        }
      }
    }
  }
`;
