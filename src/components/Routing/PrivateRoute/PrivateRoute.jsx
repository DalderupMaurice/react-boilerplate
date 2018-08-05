import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

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

const mapStateToProps = state => ({
  // Check if user exists or not - return boolean
  isAuthenticated: !!state.user.jwt
});

export default connect(mapStateToProps)(PrivateRoute);
