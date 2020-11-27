import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Views
import Albums from './views/Albums';
import Home from './views/Home';
import NotFound from './views/NotFound';

// Css
import './App.css';

const App = (props) => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/albumes" exact component={Albums}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );

};

export default App;
