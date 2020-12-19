import React from 'react';
import { Provider } from 'react-redux';
import ReactApp from './App';
import 'semantic-ui-css/semantic.min.css'
// Store
import store from '../store';

const App = () => (
    <Provider store={store}>
        <ReactApp/>
    </Provider>
);

export default App;
