import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";

import "antd/dist/antd.css";

import { ConnectedRouter } from "connected-react-router";
import configureStore from "./redux/config/configureStore";

import Routes from "./components/Routing";
import { restoreSession } from "./redux/users/userActions";

// Initialize data from server or localstorage here
const history = createBrowserHistory();
const store = configureStore({}, history);
store.dispatch(restoreSession());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
