import React from "react";

const styles = {
  divider: {
    height: 1,
    width: "98%",
    backgroundColor: "lightgrey",
  },
};

function Divider() {
  return <div css={styles.divider} />;
}

export default Divider;
