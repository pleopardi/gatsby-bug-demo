import React, { Fragment } from "react";
import { graphql } from "gatsby";
import CssBaseline from "../components/CssBaseline";
import Footer from "../components/common/Footer.atom";
import HomeLayout from "../components/HomeLayout";
import Logo from "../../content/assets/logo.svg";
import Post from "../components/home/Post.organism";
import PostList from "../components/home/PostList.organism";
import Seo from "../components/common/Seo";
import Spacer from "../components/common/Spacer.atom";
import StyledLink from "../components/common/StyledLink.atom";

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
      <Seo lang="it" title="Home" />
      <CssBaseline />
      <HomeLayout>
        <header css={styles.header}>
          <Logo css={styles.logo} />
          <Spacer width="1rem" />
          <StyledLink style={styles.blogTitleLink} to="/">
            <h1>{siteTitle}</h1>
          </StyledLink>
        </header>
        <main>
          <Post post={firstPost} style={{ marginBottom: 0 }} />
          <Spacer height="4rem" />
          <hr />
          <Spacer height="4rem" />
          <PostList posts={otherPosts} />
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
