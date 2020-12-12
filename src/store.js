import { createStore } from 'redux';

// Reducers
import user from './reducers/user';

const store = createStore(user);

export default store;