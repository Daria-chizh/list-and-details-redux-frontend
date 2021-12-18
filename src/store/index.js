import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { combineEpics, createEpicMiddleware  } from 'redux-observable';

import { loadServicesEpic, loadServiceDetailsEpic } from "../epics/index";
import serviceListReducer from '../reducers/services';
import fetcherReducer from '../reducers/fetcher';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__|| compose;

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  combineReducers({ serviceList: serviceListReducer, fetcher: fetcherReducer }),
  composeEnhancers(applyMiddleware(epicMiddleware))
);

const epic = combineEpics(loadServicesEpic, loadServiceDetailsEpic);
epicMiddleware.run(epic);

export default store;
