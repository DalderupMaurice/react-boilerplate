import React from "react";
import { node } from "prop-types";

import "./LoginLayout.scss";

export default function LoginLayout({ children }) {
  return <div className="loginLayout">{children}</div>;
}

LoginLayout.propTypes = {
  children: node
};

LoginLayout.defaultProps = {
  children: null
};
