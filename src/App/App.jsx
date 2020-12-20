import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

// Actions 
import { getSongs } from '../actions/songs';
import { getAlbums } from '../actions/albums';
import { getUser } from '../actions/user';

// Css
import './App.css';

const ReactApp = (props) => {

  console.log(props);

  const { getAlbums, getSongs } = props;

  useEffect(() => {
    getAlbums();
    getSongs();
  }, []);

  return (
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
  );

};

const mapStateToProps = (state) => ({...state});
const mapDispatchToProps = (dispatch) => ({
    getSongs: () => dispatch(getSongs()),
    getAlbums: () => dispatch(getAlbums()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactApp);
