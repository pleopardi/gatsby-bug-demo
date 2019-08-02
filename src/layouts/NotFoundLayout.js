import React from "react";
import PropTypes from "prop-types";

const styles = {
  wrapper: {
    width: "100%",
    maxWidth: "60rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem",

    a: {
      color: "#71151a",
      fontWeight: 500,
    },
    h1: {
      marginBottom: "1.2rem",
      marginTop: "1.2rem",
    },
    p: {
      marginBottom: "0.8rem",
      marginTop: "0.8rem",
    },
  },
};

function NotFoundLayout({ children }) {
  return <div css={styles.wrapper}>{children}</div>;
}

NotFoundLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NotFoundLayout;
