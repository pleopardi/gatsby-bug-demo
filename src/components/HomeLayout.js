import React from "react";
import PropTypes from "prop-types";

const styles = {
  wrapper: {
    width: "100%",
    maxWidth: "60rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem",

    "h1, h2": {
      marginBottom: "1.2rem",
      marginTop: "1.2rem",
    },
    "h3, h4, h5, h6, p": {
      marginBottom: "0.8rem",
      marginTop: "0.8rem",
    },
  },
};

function HomeLayout({ children }) {
  return <div css={styles.wrapper}>{children}</div>;
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
