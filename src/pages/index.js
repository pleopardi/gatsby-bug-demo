import React, { Fragment } from "react";
import { graphql } from "gatsby";
import CookieBanner from "../components/CookieBanner";
import CssBaseline from "../components/CssBaseline";
import { Footer, Seo, Spacer, StyledLink } from "../components/common";
import HomeLayout from "../layouts/HomeLayout";
import Logo from "../../content/assets/logo.svg";
import PostCard from "../components/home/PostCard";
import PostsList from "../components/home/PostsList.organism";

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

function BlogIndex({ data }) {
  const firstPost = data.firstPost.nodes[0];
  const otherPosts = data.otherPosts.nodes;
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Fragment>
      <Seo
        description="La home di Viaticum, coi post recenti e quelli in vetrina."
        lang="it"
        title="Home"
      />
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

export default BlogIndex;

export const pageQuery = graphql`
  query {
    firstPost: allMdx(
      limit: 1
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          author
          date
          description
          image {
            sharp: childImageSharp {
              fluid(maxHeight: 524, maxWidth: 928) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          slug
          tags
          title
        }
      }
    }
    otherPosts: allMdx(
      skip: 1
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          author
          date
          description
          image {
            sharp: childImageSharp {
              fluid(maxHeight: 248, maxWidth: 440) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          slug
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
  }
`;
