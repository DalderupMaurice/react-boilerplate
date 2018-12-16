import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const UserRoute = ({
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

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  appState: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

UserRoute.defaultProps = {
  appState: {},
  isAuthenticated: false
};

const mapStateToProps = state => ({
  // Check if user exists or not - return boolean
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(UserRoute);
