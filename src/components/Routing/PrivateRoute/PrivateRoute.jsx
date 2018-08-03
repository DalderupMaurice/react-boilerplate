import React from "react";
import { Route, Redirect } from "react-router-dom";
import { bool, func } from "prop-types";

export default class PrivateRoute extends React.PureComponent {
  static propTypes = {
    authenticated: bool,
    component: func.isRequired
  };

  static defaultProps = {
    authenticated: false
  };

  render() {
    const { authenticated, component: Component } = this.props;

    if (authenticated) {
      return (
        <Route {...this.props} render={props => <Component {...props} />} />
      );
    }

    return <Redirect push to="/login" />;
  }
}
