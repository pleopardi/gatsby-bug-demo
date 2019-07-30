import React from "react";
import { Global } from "@emotion/core";

const styles = {
  global: {
    "*, *::after, *::before": {
      boxSizing: "inherit",
    },
    body: {
      boxSizing: "border-box",
      fontFamily: "Montserrat, sans-serif",
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

function CssBaseline() {
  return <Global styles={styles.global} />;
}

export default CssBaseline;
