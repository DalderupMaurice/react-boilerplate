import * as types from "../actionTypes";
import { registerSaga } from "../users/userSaga";

export default function* rootSage() {
  yield takeLatest(types.CREATE_USER_REQUEST);
}
