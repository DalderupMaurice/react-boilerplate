import Connection from "../__utils__/Connection";

export default class AuthService {
  constructor(baseUrl = "http://localhost:3000") {
    this.connection = new Connection(baseUrl);
  }

  register = user => {};
}
