import { call, put } from "redux-saga/effects";

import AuthService from "../../services/AuthService";
import { registerSuccess } from "./userActions";

const authSerivce = new AuthService();

export function* registerSaga({ payload }) {
  const user = yield call(authSerivce.register, payload);
  yield put(registerSuccess(user));
}

export function* loginSaga({ payload }) {
  yield put({ payload });
}
