import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Spacer = styled.div(({ height, width }) => ({
  height,
  width,
}));

Spacer.defaultProps = {
  height: 1,
  width: 1,
};

Spacer.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Spacer;
