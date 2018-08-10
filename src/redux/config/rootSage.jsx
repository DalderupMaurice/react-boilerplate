import { takeLatest } from "redux-saga/effects";

import * as types from "../common/actionTypes";
import {
  registerSaga,
  loginSaga,
  logoutSaga,
  restoreSessionSaga
} from "../users/userSaga";

export default function* rootSage() {
  yield takeLatest(types.REGISTER_USER_REQUEST, registerSaga);
  yield takeLatest(types.LOGIN_USER_REQUEST, loginSaga);
  yield takeLatest(types.LOGOUT_USER_REQUEST, logoutSaga);
  yield takeLatest(types.RESTORE_SESSION_REQUEST, restoreSessionSaga);
}
