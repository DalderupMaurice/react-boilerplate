import * as types from "../actionTypes";
import initialState from "../config/initialState";

function actionTypeEndsInSuccess(type) {
  return type.substr(type.length - 8) === "_SUCCESS";
}

export default function apiStatusReducer(
  state = initialState.amountCallsInProgress,
  action
) {
  if (action.type === types.BEGIN_API_CALL) {
    return state + 1;
  }
  if (
    action.type === types.API_CALL_ERROR ||
    actionTypeEndsInSuccess(action.type)
  ) {
    return state - 1;
  }

  return state;
}
