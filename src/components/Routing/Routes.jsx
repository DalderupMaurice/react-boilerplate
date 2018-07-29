/* eslint-disable */

import React, { PureComponent } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

// Routing
import DefaultRoute from "./DefaultRoute";
import PrivateRoute from "./PrivateRoute";

// Pages
import {
  DashboardPage,
  HomePage,
  LoginPage,
  PageNotFound
} from "../../containers";
import withLayout from "../../hocs/withLayout";
import LoginLayout from "./LoginLayout";
import AuthenticatedLayout from "./AuthenticatedLayout";

const withLoginLayout = withLayout(LoginLayout);
const withAuthLayout = withLayout(AuthenticatedLayout);

class Index extends PureComponent {
  render() {
    return (
      <Switch>
        {/*<DefaultRoute exact path="/" component={HomePage} appState={appState} />*/}
        {/*<DefaultRoute path="/login" component={LoginPage} appState={appState} />*/}
        {/*<DefaultRoute*/}
        {/*path="/dashboard"*/}
        {/*component={DashboardPage}*/}
        {/*appState={appState}*/}
        {/*/>*/}
        <Route exact path="/login" component={withLoginLayout(LoginPage)} />
        {/*<Route exact path="/register" component={withLoginLayout(Register)} />*/}
        <PrivateRoute exact path="/" component={withAuthLayout(HomePage)} />
        {/*<PrivateRoute exact path="/logout" component={withAuthLayout(Logout)} />*/}
        <Redirect to="/login" />
      </Switch>
    );
  }
}

Index.propTypes = {
  appState: PropTypes.object
};

Index.defaultProps = {
  appState: {}
};

export default Index;

/* eslint-disable */
