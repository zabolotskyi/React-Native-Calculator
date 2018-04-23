import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const middleware = composeWithDevTools(applyMiddleware(promise(), thunk, createLogger()));

export default createStore(rootReducer, middleware);
