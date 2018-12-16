import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import callsInProgress from "../common/loadingReducer";
import user from "../users/userReducer";

export default history =>
  combineReducers({
    router: connectRouter(history),
    callsInProgress,
    user
  });
