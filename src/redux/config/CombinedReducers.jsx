import { combineReducers } from "redux";

import amountCallsInProgress from "../ApiStatus/apiStatusReducer";
import web3 from "../web3/web3Reducer";

const rootReducer = combineReducers({
  amountCallsInProgress,
  web3
});

export default rootReducer;
