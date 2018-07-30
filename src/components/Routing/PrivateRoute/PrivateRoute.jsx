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

  render() {
    const { history, authenticated, component: Component } = this.props;

    if (authenticated) {
      return (
        <Route {...this.props} render={props => <Component {...props} />} />
      );
    }
    console.log(history);
    // this.props.history.push('/login')
    // return
    // return <React.Fragment>{window.location.replace("/login")}</React.Fragment>
    return <Redirect push to="/login" />;
  }
}
