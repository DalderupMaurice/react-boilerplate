import React from "react";
import PropTypes from "prop-types";

const DataDisplay = props => (
  <div style={{ fontSize: "14px", textAlign: "left", margin: "auto" }}>
    <pre>{props.asset && JSON.stringify(props.asset, null, 2)}</pre>
  </div>
);

DataDisplay.propTypes = {
  asset: PropTypes.object
};

DataDisplay.defaultProps = {
  asset: null
};

export default DataDisplay;
