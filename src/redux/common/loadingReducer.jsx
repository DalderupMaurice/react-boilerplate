import { endsWith } from "lodash";

import initialState from "../config/initialState";

const isRequestAction = type => endsWith(type, "_REQUEST");
const isSuccessAction = type => endsWith(type, "_SUCCESS");
const isErrorAction = type => endsWith(type, "_FAILED");

export default function apiStatusReducer(
  state = initialState.callsInProgress,
  action
) {
  const { type } = action;
  if (isRequestAction(type)) return state + 1;
  if (isSuccessAction(type)) return state - 1;
  if (isErrorAction(type)) return state - 1;
  return state;
}
