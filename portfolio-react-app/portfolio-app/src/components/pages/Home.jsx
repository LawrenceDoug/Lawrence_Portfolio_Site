import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import '../../css/home.css';


const screenSize = {
  smartphone: '@media only screen and (max-width: 479px)'
}

const styles = StyleSheet.create({
  home_container: {
    width: '100%',
    height: '100%',
    margin: '0',
    padding: '0'
  },
  header_container: {
    width: '100%',
    height: '100vh',
    backgroundImage: 'linear-gradient(to bottom, #bc4e9c, #f80759)',
  }
});

class Home extends Component {
  render() {
    return (
      <div className={css(styles.home_container)}>
        <div className={css(styles.header_container)}>
        
        </div>
      </div>
    );
  }
}

export default Home;