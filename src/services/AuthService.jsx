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
        console.log('trying');
        const userFromStorage = JSON.parse(localStorage.getItem(LS_USER));
        if (userFromStorage) resolve(await this.login(userFromStorage));
        console.log('trying');

      } catch (e) {
        console.log('trying');

        reject(e);
      }
      console.log('trying');

      reject("No session found");
    });

  logout = () => {
    localStorage.clear();
  };
}

const instance = new AuthService();
Object.freeze(instance);

export default AuthService;
