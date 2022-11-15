import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import App from '../src/layouts/app.js';
import Login from './layouts/login/index.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={App} />
        
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
