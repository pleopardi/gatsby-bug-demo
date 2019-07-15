import React, { Fragment } from "react";
import { graphql } from "gatsby";
import BaseLayout from "../components/BaseLayout";
import Footer from "../components/common/Footer.atom";
import HomeLayout from "../components/HomeLayout";
import Post from "../components/home/Post.organism";
import PostList from "../components/home/PostList.organism";
import Seo from "../components/common/Seo";
import Spacer from "../components/common/Spacer.atom";
import StyledLink from "../components/common/StyledLink.atom";

function BlogIndex({ data }) {
  const siteTitle = data.site.siteMetadata.title;
  const firstPost = data.firstPost.nodes[0];
  const otherPosts = data.otherPosts.nodes;

  return (
    <Fragment>
      <Seo lang="it" title="Articoli del blog" />
      <BaseLayout>
        <HomeLayout>
          <header>
            <StyledLink to="/">
              <h1>{siteTitle}</h1>
            </StyledLink>
          </header>
          <Post post={firstPost} />
          <Spacer height="4rem" />
          <hr />
          <Spacer height="4.6rem" />
          <PostList posts={otherPosts} />
          <Spacer height="4rem" />
          <Footer />
        </HomeLayout>
      </BaseLayout>
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

/*

/ <Layout location={this.props.location} title={siteTitle}>
      // <SEO title="All posts" />
      // <Bio />

*/
