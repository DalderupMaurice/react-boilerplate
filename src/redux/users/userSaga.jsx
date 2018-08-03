import { register } from "../../services/AuthService";

export default function* registerSaga(action) {
  const user = yield call(register, action.user);
}
