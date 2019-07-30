import React from "react";
import { Global } from "@emotion/core";

const styles = {
  global: {
    "*, *::after, *::before": {
      boxSizing: "inherit",
    },
    a: {
      boxShadow: "none",
      textDecoration: "none",
    },
    "a:focus, a:hover": {
      textDecoration: "underline",
      textUnderlinePosition: "under",
    },
    body: {
      boxSizing: "border-box",
      fontFamily: "Montserrat, sans-serif",
    },
    "h1, h2, h3, h4, h5, h6, hr, img, p": {
      margin: 0,
      padding: 0,
    },
    h1: {
      fontWeight: 500,
    },
    "h2, h3, h4, h5, h6": {
      fontWeight: 600,
    },
    html: {
      MozOsxFontSmoothing: "grayscale",
      WebkitFontSmoothing: "antialiased",
    },
    p: {
      lineHeight: "1.6rem",
    },
  },
};

function CssBaseline() {
  return <Global styles={styles.global} />;
}

export default CssBaseline;
