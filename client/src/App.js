import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Search from './pages/Search'
import Saved from './pages/Saved'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/Saved" component={Saved} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
