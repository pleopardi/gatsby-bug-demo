import React from "react";

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
  },
};

function Footer() {
  return <footer css={styles.footer}>© {new Date().getFullYear()}</footer>;
}

export default Footer;
