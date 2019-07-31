import React from "react";
import PropTypes from "prop-types";

const styles = {
  wrapper: {
    width: "100%",
    maxWidth: "40rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",

    a: {
      color: "#71151a",
      fontWeight: 500,
    },
    blockquote: {
      fontStyle: "italic",
    },
    h1: {
      fontWeight: 600,
    },
    "h1, h2": {
      marginBottom: "1rem",
      marginTop: "2rem",
    },
    "h3, h4, h5, h6": {
      marginBottom: "0.8rem",
      marginTop: "1.8rem",
    },
    "img, p": {
      marginBottom: "1.2rem",
      marginTop: "1.2rem",
    },
    li: {
      lineHeight: "1.6rem",
      marginBottom: "0.6rem",
      marginTop: "0.6rem",
    },
  },
};

function PostLayout({ children }) {
  return <div css={styles.wrapper}>{children}</div>;
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostLayout;
