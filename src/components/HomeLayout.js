import React from "react";
import PropTypes from "prop-types";

const styles = {
  wrapper: {
    width: "100%",
    maxWidth: "60rem",
    marginLeft: "auto",
    marginRight: "auto",
    padding: "1rem",

    "h3,p": {
      marginTop: "1.2rem",
    },
  },
};

function HomeLayout({ children }) {
  return <section css={styles.wrapper}>{children}</section>;
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomeLayout;
