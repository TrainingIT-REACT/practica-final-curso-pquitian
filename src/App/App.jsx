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
import Album from './views/Album';
import UserProfile from './views/UserProfile';
import Login from './views/Login';

// Other
import { ROUTES } from './routes/routes';
import PrivateRoute  from './components/PrivateRoute';

// Components
import NavBar from './components/NavBar';

// Css
import './App.css';

const App = (props) => {

  return (
    <Provider store={store}>
    <DataProvider>
        <Router>
          <NavBar/>
          <div className="App">
            <Switch>
              <Route path={ROUTES.HOME} exact component={Home}/>
              <Route path={ROUTES.ALBUMS} exact component={Albums}/>
              <Route path={ROUTES.ALBUM_DETAIL} component={Album}/>
              <Route path={ROUTES.LOGIN} exact component={Login}/>
              <PrivateRoute path={ROUTES.USER_PROFILE} component={UserProfile}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    </DataProvider>
    </Provider>
  );

};

export default App;
