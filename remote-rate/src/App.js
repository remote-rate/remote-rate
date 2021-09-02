import React from 'react';
import './App.css';

import Home from './components/Landing.js';
import Profile from './components/Profile.js';
import Compare from './components/Compare.js';
import About from './components/AboutUs.js';
// import Header from './components/Header';
import Landing from './components/Landing.js';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
      <Router>
          <Switch>
            <Route exact path="/">
              {/* <Header /> */}
              <Landing />
            </Route>
            <Route exact path="/landing">
              <Landing />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/compare">
              <Compare />
            </Route>
            <Route exact path="/aboutUs">
              <About />
            </Route>
          </Switch>
        </Router>
        <h1>App</h1>
        </>
      // Should only have components. No code is done here
    )
  }
}

export default App;
