import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducer } from "./ducks/reducer";
import { rootSaga } from "./ducks/sagas";

export type AppStateType = ReturnType<typeof reducer>;

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
};
