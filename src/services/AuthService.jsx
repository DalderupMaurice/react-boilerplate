import Connection from "../__utils__/Connection";
import { LS_USER } from "../__utils__/Constants";

class AuthService {
  constructor(baseURL) {
    this.connection = new Connection(baseURL);
  }

  register = user => this.connection.post("/auth/register", user);

  login = async user => {
    const { _doc: currentUser } = await this.connection.post(
      "/auth/login",
      user
    );

    if (user.remember) {
      localStorage.setItem(
        LS_USER,
        JSON.stringify({
          ...currentUser,
          password: user.password
        })
      );
    }

    return {
      ...currentUser,
      isAuthenticated: true
    };
  };

  restoreSession = () => {
    const userFromStore = JSON.parse(localStorage.getItem(LS_USER));
    const isAuthenticated = !!userFromStore;
    return {
      ...userFromStore,
      isAuthenticated
    };
  };

  logout = () => {
    localStorage.clear();
    return { isAuthenticated: false };
  };
}

const instance = new AuthService();
Object.freeze(instance);

export default AuthService;
