import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "antd/dist/antd.css";

import AppContainer from "./containers/App/AppContainer";
import configureStore from "./redux/config/configureStore";

// import { init } from "./redux/web3/web3Actions";

// Initialize data from server or localstorage here
const store = configureStore();
// store.dispatch(init());


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppContainer />
    </Router>
  </Provider>,,
  document.getElementById("root")
);
