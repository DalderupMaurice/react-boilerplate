// Imports
import { createStore, applyMiddleware, compose } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { createSagaMiddleware } from "redux-saga";

// Middleware imports
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "../../../../../../../Library/Caches/typescript/2.9/node_modules/@types/redux-immutable-state-invariant"; // eslint-disable-line

// Root reducer
import rootReducer from "./CombinedReducers";
import rootSaga from "./rootSage";

export default function configureStore(initialState, history) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const sagaMiddleWare = createSagaMiddleware();

  const enhancer = composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
      reduxImmutableStateInvariant()
    )
  );

  const store = createStore(
    connectRouter(history)(rootReducer), // new root reducer with router state
    initialState,
    enhancer
  );
  sagaMiddleWare.run(rootSaga);

  return store;
}
