// Import
import React, { Component } from 'react';


class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div style={{
          backgroundImage: 'url("../assets/images/iconic/moon.svg")'
        }} className='header_container parallax'>
          <img className='mountain-img' src='../assets/images/iconic/mountains.svg' alt='mountain'/>
        </div>
      </div>
    );
  }
}

export default Home;