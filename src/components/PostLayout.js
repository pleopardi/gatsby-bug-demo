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

    "h1, h2, h3, h4, h5, h6, img": {
      marginBottom: "0.8rem",
      marginTop: "0.8rem",
    },
    "h1, h2, h3, h4, h5, h6, p": {
      textAlign: "justify",
    },
    "p, ul": {
      marginBottom: "0.6rem",
      marginTop: "0.6rem",
    },
  },
};

function PostLayout({ children }) {
  return <main css={styles.wrapper}>{children}</main>;
}

PostLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PostLayout;
