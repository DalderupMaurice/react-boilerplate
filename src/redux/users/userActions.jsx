import * as types from "../actionTypes";

/**
 * SAGAS
 */
export const register = user => ({
  type: types.REGISTER_USER_REQUEST,
  payload: user
});

export const registerSuccess = user => ({
  type: types.REGISTER_USER_SUCCESS,
  payload: user
});
