import { call, put } from "redux-saga/effects";

import AuthService from "../../services/AuthService";
import { registerSuccess, registerFailed } from "./userActions";

const authSerivce = new AuthService();

export function* registerSaga({ payload }) {
  try {
    const user = yield call(authSerivce.register, payload);
    yield put(registerSuccess(user));
  } catch(e) {
    // Different action depending on type of error
    yield put(registerFailed(e));
  }
}

export function* loginSaga({ payload }) {
  yield put({ payload });
}
