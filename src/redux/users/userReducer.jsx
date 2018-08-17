/* eslint-disable no-fallthrough */
import * as types from "../common/actionTypes";
import initialState from "../config/initialState";

const userReducer = (state = initialState.user, { type, payload }) => {
  switch (type) {
    // Requests
    case types.RESTORE_SESSION_REQUEST:
    case types.REGISTER_USER_REQUEST:
    case types.LOGIN_USER_REQUEST:
    case types.LOGOUT_USER_REQUEST:
      return Object.assign({}, state, { loading: true, errors: null });

    // Success
    case types.RESTORE_SESSION_SUCCESS:
    case types.REGISTER_USER_SUCCESS:
    case types.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, { ...payload, loading: false });
    case types.LOGOUT_USER_SUCCESS:
      return Object.assign({}, {}, { ...payload, loading: false });

    // Failed
    case types.RESTORE_SESSION_FAILED:
    case types.REGISTER_USER_FAILED:
    case types.LOGIN_USER_FAILED:
    case types.LOGOUT_USER_FAILED:
      return Object.assign({}, state, { loading: false, errors: payload });

    default:
      return state;
  }
};

export default userReducer;
