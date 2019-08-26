import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { apiMiddleware } from 'redux-api-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import { onSetCategory, onGetQuestion } from './middlewares';

const middlewares = [onGetQuestion, onSetCategory, thunk, apiMiddleware];

const composedMiddlewares =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, composedMiddlewares);

export default store;
