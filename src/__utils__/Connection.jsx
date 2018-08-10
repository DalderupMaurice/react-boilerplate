import axios from "axios";

let currentConnection = null;
let currentToken = null;

export default function Connection(
  baseURL = "http://localhost:3000/api",
  token = "",
  headers = null
) {
  currentToken = token;
  currentConnection = axios.create({
    baseURL,
    timeout: 10000,
    headers: headers || {
      Accept: "application/json",
      "X-Access-Token": currentToken
    }
  });

  currentConnection.interceptors.response.use(
    response => response.data,
    error =>
      // Only send the response
      Promise.reject(error.response.data.message)
  );

  return currentConnection;
}

export function getConnection() {
  if (currentConnection) return currentConnection;
  throw new Error("Missing connection to API");
}

export function getToken() {
  if (currentConnection) return currentToken;
  throw new Error("Missing connection to API");
}
