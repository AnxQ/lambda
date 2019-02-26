import React, {Component} from 'react';
import {Route, HashRouter, Switch, Redirect} from 'react-router-dom';
import MainPage from './mainPage';
import SantaEve from './santaEve';

import request, {get} from './utils/request'

class App extends Component {
  componentWillMount() {
    get()
  }
  render() {
    return (
        <HashRouter>
          <Switch>
            <Route path="/:page" component={MainPage}/>
            <Redirect from="/" to="/info" />
          </Switch>
        </HashRouter>
    );
  }
}

export default App;
