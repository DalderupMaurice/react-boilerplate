import { combineReducers } from "redux";

import callsInProgress from "../common/loadingReducer";
import user from "../users/userReducer";

const rootReducer = combineReducers({
  callsInProgress,
  user
});

export default rootReducer;
