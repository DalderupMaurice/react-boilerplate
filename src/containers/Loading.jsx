import React from "react";

import "./Loading.scss";

const Loading = () => (
  <div className="spinnerWrapper">
    <div className="spinner">
      <div className="double-bounce1" />
      <div className="double-bounce2" />
    </div>
  </div>
);

export default Loading;
