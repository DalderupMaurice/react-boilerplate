import { takeLatest } from "redux-saga/effects";

import * as types from "../common/actionTypes";
import { registerSaga } from "../users/userSaga";

export default function* rootSage() {
  yield takeLatest(types.REGISTER_USER_REQUEST, registerSaga);
}
