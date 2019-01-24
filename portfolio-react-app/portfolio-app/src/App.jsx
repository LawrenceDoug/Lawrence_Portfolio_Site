import React, { Component } from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Navigation from './components/layout/Navigation';

const screenSize = {
  smartphone: '@media only screen and (max-width: 479px)'
}

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    margin: '0',
    padding: '0'
  },
  navigation: {
    zIndex: 1,
    position: 'absolute'
  },
  main_container: {
    width: '100%',
    height: '100%',
    marginTop: '-60px',
    padding: '0'
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
            <Route path="/work" component={Work} exact />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
