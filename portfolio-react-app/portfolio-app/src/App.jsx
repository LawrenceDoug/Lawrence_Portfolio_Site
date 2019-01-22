import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navigation from './components/layout/Navigation';

const screenSize = {
  smartphone: '@media only screen and (max-width: 479px)'
}

const styles = StyleSheet.create({
  body: {
  },
  navigation: {
    zIndex: 100
  },
  main_container: {
  }
});

class App extends Component {
  render() {
    return (
      <div className={css(styles.body)}>
        <Navigation className={css(styles.navigation)}/>
        <div className={css(styles.main_container)}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} exact />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
