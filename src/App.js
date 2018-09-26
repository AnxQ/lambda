import React, {Component} from 'react';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';
import MainPage from './mainPage'

class App extends Component {

  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/:page" component={MainPage}/>
            <Redirect from="/" to="/info" />
          </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
