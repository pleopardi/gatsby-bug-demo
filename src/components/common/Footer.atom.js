import React from "react";

const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    fontSize: "0.9rem",
    fontWeight: 600,
  },
};

function Footer() {
  return (
    <footer css={styles.footer}>© {new Date().getFullYear()} Viaticum</footer>
  );
}

export default Footer;
