// Imports
import { createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

// Middleware imports
// eslint-disable-next-line
import { composeWithDevTools } from "redux-devtools-extension";

// Root reducer
import rootReducer from "./CombinedReducers";
import rootSaga from "./rootSage";

export default function configureStore(initialState, history) {
  const sagaMiddleWare = createSagaMiddleware();

  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleWare, routerMiddleware(history)));

  const store = createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    initialState,
    enhancer
  );
  sagaMiddleWare.run(rootSaga);

  return store;
}
