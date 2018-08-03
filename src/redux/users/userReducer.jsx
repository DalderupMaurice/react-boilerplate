import * as types from "../actionTypes";
import initialState from "../config/initialState";

const userReducer = (state = initialState.user, { type, payload }) => {
  switch (type) {
    case types.REGISTER_USER_SUCCESS:
      return Object.assign({}, state, payload);
    case types.LOGOUT_USER_SUCCESS:
      return Object.assign({}, state, {});
    default:
      return state;
  }
};

export default userReducer;
