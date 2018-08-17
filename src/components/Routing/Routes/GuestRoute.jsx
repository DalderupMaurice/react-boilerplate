import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const GuestRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={props => (isAuthenticated ? <Redirect to="/dashboard" /> : <Component {...props} />)} />
);

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

GuestRoute.defaultProps = {
  isAuthenticated: false
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated || false
});

export default connect(mapStateToProps)(GuestRoute);
