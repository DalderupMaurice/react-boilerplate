import React from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react";
import { Route } from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/react-router-dom";
import PropTypes from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/prop-types";

const DefaultRoute = ({ component: Component, appState, ...rest }) => (
  <Route
    {...rest}
    render={props => <Component {...props} appState={appState} />}
  />
);

DefaultRoute.propTypes = {
  component: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

export default DefaultRoute;
