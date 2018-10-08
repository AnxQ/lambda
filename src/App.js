import React, {Component} from 'react';
import {Route, HashRouter, Switch, Redirect} from 'react-router-dom';
import MainPage from './mainPage'

class App extends Component {

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
