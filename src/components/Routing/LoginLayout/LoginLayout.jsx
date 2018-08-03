import React from "../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import { node } from "../../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types";

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
