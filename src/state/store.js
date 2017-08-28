import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

export default function makeStore() {
  const enhancer = applyMiddleware(thunk);
  const store = createStore(rootReducer, undefined, enhancer);
  return store;
}