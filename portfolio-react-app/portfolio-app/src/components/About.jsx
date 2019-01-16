import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import '../App.css';

const screenSize = {
    smartphone: '@media only screen and (max-width: 479px)'
}

const styles = StyleSheet.create({
    body: {
        overflow: 'hidden',
        [screenSize.smartphone]: {
            webkitOverflowScrolling: 'touch'
        }
    },
    about_container: {

    }
});

class About extends Component {
  render() {
    return (
      <div className={css(styles.about_container)}>
        
      </div>
    );
  }
}

export default About;