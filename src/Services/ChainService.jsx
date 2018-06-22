import Connection from "../__utils__/Connection";

export default class AuthService {
  constructor(baseUrl = "http://localhost:3000/api") {
    this.connection = new Connection(baseUrl);
  }

  createAcknowledgement = ackowledgementObject =>
    new Promise((resolve, reject) => {
      this.connection
        .post("/chain/invoke/createAcknowledgement", {
          funcArgs: { ...ackowledgementObject }
        })
        .then(response => resolve(response))
        .catch(error => reject(error));
    });

  queryAcknowledgement = id =>
    new Promise((resolve, reject) => {
      this.connection
        .post("/chain/query/QueryAcknowledgement", {
          funcArgs: { id }
        })
        .then(response => resolve(response))
        .catch(error => reject(error));
    });
}
