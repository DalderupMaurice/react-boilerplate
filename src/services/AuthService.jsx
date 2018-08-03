import Connection from "../__utils__/Connection";

class AuthService {
  constructor(baseUrl = "http://localhost:3000") {
    this.connection = new Connection(baseUrl);
  }

  // TODO real api call
  register = user => user;
}

const instance = new AuthService();
Object.freeze(instance);

export default AuthService;
