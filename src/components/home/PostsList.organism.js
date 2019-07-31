import React from "react";
import PropTypes from "prop-types";
import PostCard from "./PostCard.organism";

const styles = {
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(20rem, 1fr))",
    gridColumnGap: "3rem",
    gridRowGap: "6rem",
  },
};

function PostList({ posts }) {
  return (
    <div css={styles.wrapper}>
      {posts.map(post => (
        <PostCard key={post.frontmatter.slug} post={post} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      frontmatter: PropTypes.shape({
        author: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.object.isRequired,
        slug: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
};

export default PostList;
