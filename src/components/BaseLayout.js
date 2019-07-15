import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Global } from "@emotion/core";

const styles = {
  global: {
    "*, *::after, *::before": {
      boxSizing: "inherit",
    },
    body: {
      boxSizing: "border-box",
    },
    "h1, h2, h3, h4, h5, h6, hr, img, p": {
      margin: 0,
      padding: 0,
    },
    html: {
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
    },
  },
};

function BaseLayout({ children }) {
  return (
    <Fragment>
      <Global styles={styles.global}></Global>
      {children}
    </Fragment>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
