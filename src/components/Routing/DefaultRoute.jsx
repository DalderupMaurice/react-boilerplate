import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const DefaultRoute = ({
  component: Component,
  appState,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />
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

const mapStateToProps = state => ({
  // Check if user exists or not - return boolean
  isAuthenticated: !!state.user.jwt
});

export default connect(mapStateToProps)(DefaultRoute);
