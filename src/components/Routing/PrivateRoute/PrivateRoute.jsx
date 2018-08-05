import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({
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

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  appState: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

PrivateRoute.defaultProps = {
  appState: {},
  isAuthenticated: false
};

export default PrivateRoute;
