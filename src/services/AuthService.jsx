import Connection from "../__utils__/Connection";

class AuthService {
  constructor(baseUrl = "http://localhost:3000") {
    this.connection = new Connection(baseUrl);
  }

  // TODO real api call
  register = user =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!user) {
          console.log("success");
          resolve(user);
        } else {
          console.log("failed");
          reject({ errors: "failed to register user" });
        }
      }, 3000);
      console.log("exit");
    });
}

const instance = new AuthService();
Object.freeze(instance);

export default AuthService;
