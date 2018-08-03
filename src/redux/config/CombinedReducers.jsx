import { combineReducers } from "redux";

import amountCallsInProgress from "../ApiStatus/apiStatusReducer";
import user from "../users/userReducer";

const rootReducer = combineReducers({
  amountCallsInProgress,
  user
});

export default rootReducer;
