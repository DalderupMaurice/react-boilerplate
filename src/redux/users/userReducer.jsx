/* eslint-disable no-fallthrough */
import * as types from "../common/actionTypes";
import initialState from "../config/initialState";

const userReducer = (state = initialState.user, { type, payload }) => {
  switch (type) {
    case types.REGISTER_USER_REQUEST:
    case types.LOGIN_USER_REQUEST:
      return Object.assign({}, state, { errors: null });

    // Register
    case types.REGISTER_USER_SUCCESS:
    case types.REGISTER_USER_FAILED:
    // Login
    case types.LOGIN_USER_SUCCESS:
    case types.LOGIN_USER_FAILED:
      return Object.assign({}, state, payload);
    default:
      return state;
  }
};

export default userReducer;
