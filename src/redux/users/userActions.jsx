import * as types from "../common/actionTypes";

/** Register Section - BEGIN * */
export const register = user => ({
  type: types.REGISTER_USER_REQUEST,
  payload: user
});

export const registerSuccess = user => ({
  type: types.REGISTER_USER_SUCCESS,
  payload: user
});

export const registerFailed = error => ({
  type: types.REGISTER_USER_FAILED,
  payload: error
});
/** Register Section - END * */

/** Login Section - BEGIN * */
export const login = user => ({
  type: types.LOGIN_USER_REQUEST,
  payload: user
});

export const loginSuccess = user => ({
  type: types.LOGIN_USER_SUCCESS,
  payload: user
});

export const loginFailed = error => ({
  type: types.LOGIN_USER_FAILED,
  payload: error
});
/** Register Section - END * */
