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

// Components
import Navigation from './components/common/Navigation';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';

class App extends Component {
  backToTop() {
    var element = document.getElementById('body');
    element.scrollTop = 0;
  }
  render() {
    return (
      <div id='body' className='body'>
        <Navigation className='navigation' />
        {/* <span className='back-to-top-btn' onClick={this.backToTop}></span> */}
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
