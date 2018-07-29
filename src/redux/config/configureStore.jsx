import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
// import { composeWithDevTools } from "redux-devtools-extension"

import rootReducer from "./CombinedReducers";

export default function configureStore(initialState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const sagaMiddleWare = createSagaMiddleware();

  const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleWare, thunk, reduxImmutableStateInvariant())
  );

  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleWare.run(rootSaga);

  return store;
}
