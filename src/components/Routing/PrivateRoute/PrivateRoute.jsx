import React from "react";
import { Route, Redirect } from "react-router-dom";
import { bool, func } from "prop-types";

export default class PrivateRoute extends React.Component {
  static propTypes = {
    authenticated: bool,
    component: func.isRequired
  };

  static defaultProps = {
    authenticated: false
  };

  renderRoute = props => {
    const { authenticated, component: Component } = this.state;

    if (authenticated) {
      return <Component {...props} />;
    }
    return <Redirect to="/login" />;
  };

  render() {
    return <Route {...this.props} render={this.renderRoute} />;
  }
}
