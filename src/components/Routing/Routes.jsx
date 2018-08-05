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
import AuthenticationPage from "../Auth/AuthenticationPage";

const withLoginLayout = withLayout(LoginLayout);
const withAuthLayout = withLayout(AuthenticatedLayout);

class Index extends React.Component {
  render() {
    return (
      <Switch>
        /* on / you can either register or login - TODO DefaultRoute not needed?? */
        <Route exact path="/" component={withLoginLayout(AuthenticationPage)} />
        /* Dashboard is the user permitted board*/
        <PrivateRoute exact path="/dashboard" component={withAuthLayout(HomePage)} />

        /* No routes matched */
        <Route component={withLoginLayout(PageNotFound)} />
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
