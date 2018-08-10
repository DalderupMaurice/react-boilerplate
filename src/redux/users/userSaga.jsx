import { call, put } from "redux-saga/effects";

import AuthService from "../../services/AuthService";
import {
  registerSuccess,
  registerFailed,
  loginFailed,
  loginSuccess,
  logoutSuccess,
  logoutFailed,
  restoreSessionSuccess,
  resoteSessionFailed,
  restoreSessionFailed
} from "./userActions";

const authSerivce = new AuthService();

export function* registerSaga({ payload }) {
  try {
    const user = yield call(authSerivce.register, payload);
    yield put(registerSuccess(user));
  } catch (e) {
    // Different action depending on type of error
    yield put(registerFailed(e));
  }
}

export function* loginSaga({ payload }) {
  try {
    const user = yield call(authSerivce.login, payload);
    yield put(loginSuccess(user));
  } catch (e) {
    // Different action depending on type of error
    yield put(loginFailed(e));
  }
}

export function* logoutSaga() {
  try {
    const user = yield call(authSerivce.logout);
    yield put(logoutSuccess(user));
  } catch (e) {
    // Different action depending on type of error
    yield put(logoutFailed(e));
  }
}

export function* restoreSessionSaga() {
  try {
    const user = yield call(authSerivce.restoreSession);
    yield put(restoreSessionSuccess(user));
  } catch (e) {
    // Different action depending on type of error
    yield put(restoreSessionFailed(e));
  }
}
