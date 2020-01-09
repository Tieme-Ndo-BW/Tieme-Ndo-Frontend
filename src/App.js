import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import ClientPage from './components/ClientPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path= '/' component={Login} />
        <Switch>
          <PrivateRoute exact path= '/clients' component= {ClientPage} />
          <Route exact path ='/auth' component= {Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
