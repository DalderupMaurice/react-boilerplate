import * as types from "../actionTypes";
import initialState from "../config/initialState";

export default function exampleReducer(state = initialState.web3, action) {
  switch (action.type) {
    case types.LOAD_WEB3_SUCCESS:
      // Due to circular references you cannot store web3 in state
      window.contract = action.contract;
      window.web3 = action.web3; // TODO why nested web3?
      return Object.assign({}, state, { user: action.user });
    case types.SET_RISK_PROFLE_SUCCESS:
      return Object.assign({}, state, {
        riskProfile: action.riskProfile,
        txInfo: action.txInfo
      });
    case types.GET_RISK_PROFLE_SUCCESS:
      return Object.assign({}, state, {
        riskProfile: action.riskProfile.surveyResult
      });
    case types.CREATE_USER_SUCCESS:
      return Object.assign({}, state, { user: action.currentUser });
    case types.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, { user: action.currentUser });
    case types.LOGOUT_USER_SUCCESS:
      return state;
    default:
      return state;
  }
}
