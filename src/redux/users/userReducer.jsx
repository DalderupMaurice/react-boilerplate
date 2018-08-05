import * as types from "../common/actionTypes";
import initialState from "../config/initialState";

const userReducer = (state = initialState.user, { type, payload }) => {
  switch (type) {
    // Registration
    case types.REGISTER_USER_REQUEST:
      // TODO errors should be {}?
      return Object.assign({}, state, { errors: null });
    case types.REGISTER_USER_SUCCESS:
      return Object.assign({}, state, payload);
    case types.REGISTER_USER_FAILED:
      return Object.assign({}, state, payload);
    // Login
    case types.LOGOUT_USER_SUCCESS:
      return Object.assign({}, state, {});
    default:
      return state;
  }
};

export default userReducer;
