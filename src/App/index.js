import React from 'react';
import { Provider } from 'react-redux';
import ReactApp from './App';
import ErrorBoundary from './components/ErrorBoundary';
import 'semantic-ui-css/semantic.min.css'
// Store
import store from '../store';

const App = () => (
    <Provider store={store}>
        <ErrorBoundary>
            <ReactApp/>
        </ErrorBoundary>
    </Provider>
);

export default App;
