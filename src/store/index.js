import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducers from "./ducks";
import sagas from "./sagas";

const persistConfig = {
  key: "BelaVistaMoveis",
  whitelist: [],
  storage,
};

const persistedRedurcer = persistReducer(persistConfig, reducers);

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === "development"
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === "development"
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : compose(applyMiddleware(...middlewares));

const store = createStore(persistedRedurcer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
