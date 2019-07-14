import React from "react";
import PropTypes from "prop-types";

const styles = {
  wrapper: {
    h3: {
      marginBottom: "1rem",
      marginTop: "1rem",
    },
    p: {
      marginBottom: "0.5rem",
      marginTop: "0.5rem",
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
