import React from "react";
import PropTypes from "prop-types";

const styles = {
  wrapper: {
    width: "100%",
    maxWidth: "60rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem",

    h1: {
      marginBottom: "1.2rem",
      marginTop: "1.2rem",
    },
    "h2, h3, h4, h5, h6": {
      marginBottom: "0.8rem",
      marginTop: "0.8rem",
    },
    p: {
      marginBottom: "0.6rem",
      marginTop: "0.6rem",
    },
  },
};

function HomeLayout({ children }) {
  return <main css={styles.wrapper}>{children}</main>;
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
