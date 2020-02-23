import { createStore,applyMiddleware } from 'redux';
import AppReducer from '../reducers';
import logger from 'redux-logger';
import IndexSagas from './sagas';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

  
const store = createStore(
  AppReducer,
  applyMiddleware(sagaMiddleware, logger),
);  
sagaMiddleware.run(IndexSagas);

export default store;