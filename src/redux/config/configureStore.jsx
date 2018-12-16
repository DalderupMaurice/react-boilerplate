// Imports
import { createStore, applyMiddleware } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

// Middleware imports
// eslint-disable-next-line
import { composeWithDevTools } from "redux-devtools-extension";

// Root reducer
import createRootReducer from "./CombinedReducers";
import rootSaga from "./rootSage";

export default function configureStore(initialState, history) {
  const sagaMiddleWare = createSagaMiddleware();

  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleWare, routerMiddleware(history)));

  const store = createStore(createRootReducer(history), initialState, enhancer);
  sagaMiddleWare.run(rootSaga);

  return store;
}
