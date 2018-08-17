import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ROLES } from "../../../__utils__/Constants";

const GuestRoute = ({ component: Component, appState, isAuthenticated, role, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated && role === ROLES.admin ? <Component {...props} /> : <Redirect to="/login" />)}
  />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  appState: PropTypes.object,
  role: PropTypes.string,
  isAuthenticated: PropTypes.bool
};

GuestRoute.defaultProps = {
  appState: {},
  role: ROLES.guest,
  isAuthenticated: false
};

const mapStateToProps = state => ({
  // Check if user exists or not - return boolean
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(GuestRoute);
