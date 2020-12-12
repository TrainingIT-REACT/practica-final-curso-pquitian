import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';

// Contexts
import { DataProvider } from './contexts/Data';

// Store
import store from '../store';

// Views
import Albums from './views/Albums';
import Home from './views/Home';
import NotFound from './views/NotFound';
import AlbumDetail from './views/AlbumDetail';
import UserProfile from './views/UserProfile';
import Login from './views/Login';

// Other components 
import PrivateRoute  from './components/PrivateRoute';

// Css
import './App.css';

const App = (props) => {

  return (
    <Provider store={store}>
    <DataProvider>
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/albumes" exact component={Albums}/>
              <Route path="/album/:id" component={AlbumDetail}/>
              <Route path="/login" exact component={Login}/>
              <PrivateRoute path="/user" component={UserProfile}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    </DataProvider>
    </Provider>
  );

};

export default App;
