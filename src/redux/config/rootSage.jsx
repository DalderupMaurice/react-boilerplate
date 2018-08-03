import * as types from "../actionTypes";
import { registerSaga } fron "../users/userSaga";

export default function* rootSage() {
  yield takeLatest(types.CREATE_USER_REQUEST)
}
