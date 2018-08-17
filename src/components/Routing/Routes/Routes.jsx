import React from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Route, Switch, withRouter } from "react-router-dom";

// Routing
import GuestRoute from "./GuestRoute";
import UserRoute from "./UserRoute";
import AdminRoute from "./AdminRoute";

// Pages
import { HomePage, PageNotFound } from "../../../containers/index";

//  Hocs
import withLayout from "../../../hocs/withLayout";
import withLoadingScreen from "../../../hocs/withLoadingScreen";

// Layouts
import LoginLayout from "../LoginLayout/index";
import AuthenticatedLayout from "../AuthenticatedLayout/index";

// Auth Pages
import AuthenticationPage from "../../Auth/AuthenticationPage";
import Logout from "../../Auth/Logout";

const withLoginLayout = withLayout(LoginLayout);
const withAuthLayout = withLayout(AuthenticatedLayout);

const Routes = () => (
  <Switch>
    {/* on / you can either register or login */}
    <GuestRoute exact path="/" component={withLoginLayout(AuthenticationPage)} />
    {/* Dashboard is the user permitted board */}
    <UserRoute exact path="/dashboard" component={withAuthLayout(HomePage)} />
    <UserRoute exact path="/logout" component={Logout} />
    <AdminRoute exact path="/admin" component={withAuthLayout(HomePage)} />
    {/* No routes matched */}
    <Route component={withLoginLayout(PageNotFound)} />
  </Switch>
);

const mapStateToProps = state => ({
  loading: state.user.loading
});

export default compose(
  withRouter,
  connect(mapStateToProps),
  withLoadingScreen
)(Routes);
