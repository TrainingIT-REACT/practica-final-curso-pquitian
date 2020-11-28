import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Contexts
import { DataProvider } from './contexts/Data';

// Views
import Albums from './views/Albums';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Album from './views/Album';

// Css
import './App.css';

const App = (props) => {

  return (
    <DataProvider>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/albumes" exact component={Albums}></Route>
          <Route path="/album/:id" component={Album}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
    </DataProvider>
  );

};

export default App;
