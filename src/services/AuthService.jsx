import Connection from "../__utils__/Connection";
import { LS_USER } from "../__utils__/Constants";

class AuthService {
  constructor(baseURL) {
    this.connection = new Connection(baseURL);
  }

  register = user =>
    new Promise((resolve, reject) => {
      this.connection
        .post("/auth/register", user)
        .then(registeredUser => resolve(registeredUser))
        .catch(error => reject(error));
    });

  login = user =>
    new Promise((resolve, reject) => {
      this.connection
        .post("/auth/login", user)
        .then(({ _doc: currentUser }) => {
          if (user.remember) {
            localStorage.setItem(
              LS_USER,
              JSON.stringify({
                ...currentUser,
                password: user.password
              })
            );
          }

          resolve({
            ...currentUser,
            isAuthenticated: true
          });
        })
        .catch(error => reject(error));
    });

  restoreSession = () =>
    new Promise(async (resolve, reject) => {
      try {
        const userFromStorage = JSON.parse(localStorage.getItem(LS_USER));
        if (userFromStorage) resolve(await this.login(userFromStorage));
      } catch (e) {
        reject(e);
      }
      reject("No session found");
    });

  logout = () => {
    localStorage.clear();
    return Promise.resolve({ isAuthenticated: false });
  };
}

const instance = new AuthService();
Object.freeze(instance);

export default AuthService;
