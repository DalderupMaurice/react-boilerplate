import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { ROLES } from "../../../__utils__/Constants";

const AdminRoute = ({
  component: Component,
  isAuthenticated,
  role,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated && role === ROLES.admin ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

AdminRoute.propTypes = {
  component: PropTypes.func.isRequired,
  appState: PropTypes.object,
  role: PropTypes.string,
  isAuthenticated: PropTypes.bool
};

AdminRoute.defaultProps = {
  appState: {},
  role: ROLES.guest,
  isAuthenticated: false
};

const mapStateToProps = state => ({
  // Check if user exists or not - return boolean
  isAuthenticated: state.user.isAuthenticated,
  role: state.user.role
});

export default connect(mapStateToProps)(AdminRoute);
