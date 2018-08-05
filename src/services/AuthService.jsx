import Connection from "../__utils__/Connection";
import { LS_USER } from "../__utils__/Constants";

class AuthService {
  constructor(baseUrl = "http://localhost:3000") {
    this.connection = new Connection(baseUrl);
  }

  // TODO real api call
  register = user =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!user) {
          resolve(user);
        } else {
          reject({ errors: "failed to register user" });
        }
      }, 3000);
    });

  // TODO real api call
  login = user =>
    new Promise((resolve, reject) => {
      // TODO API CALL
      const retrievedUser = {
        ...user,
        jwt: "randomJWT",
        isAuthenticated: true
      };

      if (user.remember) {
        localStorage.setItem(LS_USER, JSON.stringify(retrievedUser));
      }

      setTimeout(() => {
        if (user) {
          resolve(retrievedUser);
        } else {
          reject({ errors: "failed to sign in" });
        }
      }, 1000);
    });
}

const instance = new AuthService();
Object.freeze(instance);

export default AuthService;
