import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { reducers } from './reducers';

/* eslint-disable no-underscore-dangle */
export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
/* eslint-enable */
