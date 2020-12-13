import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createPromise } from 'redux-promise-middleware';

// Reducers
import user from './reducers/user';
import albums from './reducers/albums';

const middleware = applyMiddleware(createPromise());

export default createStore(
    combineReducers({ user, albums }),
    middleware
    );