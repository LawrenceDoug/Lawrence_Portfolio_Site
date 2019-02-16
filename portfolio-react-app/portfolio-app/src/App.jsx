//Imports
import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { withRouter } from 'react-router';

//CSS Files
import './App.css';
import './index.css';

//Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Navigation from './components/layout/Navigation';

class App extends Component {
  render() {
    return (
      <div className='body'>
        <Navigation className='navigation'/>
        <div className='main-container'>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
            <Route path="/work" component={Work} exact />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
