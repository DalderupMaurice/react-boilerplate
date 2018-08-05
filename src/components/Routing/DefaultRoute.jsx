import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const DefaultRoute = ({
  component: Component,
  appState,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

DefaultRoute.propTypes = {
  component: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool
};

DefaultRoute.defaultProps = {
  isAuthenticated: false
};

export default DefaultRoute;
