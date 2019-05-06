// Import
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {
  isMobile
} from "react-device-detect";

class Home extends Component {
  isOnScreenY(element) {
    var screen_top_position = window.scrollY;
    var screen_bottom_position = screen_top_position + window.innerHeight;

    var element_top_position = element.offsetTop;
    var element_bottom_position = element_top_position + element.offsetHeight;

    return (this.inRange(element_top_position, screen_top_position, screen_bottom_position)
      || this.inRange(element_bottom_position, screen_top_position, screen_bottom_position));
  }

  inRange(x, a, b) {
    return (x >= a && x <= b);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      var webProjects = document.getElementById('top-web-projects-container');
      // console.log('webProjects element: \nOffsetTop: ' + webProjects.offsetTop + '\nOffsetHeight:' + webProjects.offsetHeight)
      // console.log('Window Y: ' + window.scrollY + '\nWindow InnerHeight: ' + window.innerHeight)
      var project = document.getElementsByClassName('project');
      var i;
      if (!isMobile) {
        if (this.isOnScreenY(webProjects)) {
          for (i = 0; i < project.length; i++) {
            project[0].style.animation = 'flowRight';
            project[0].style.animationDuration = '1s';
            project[1].style.animation = 'flowUp';
            project[1].style.animationDuration = '1s';
            project[2].style.animation = 'flowLeft';
            project[2].style.animationDuration = '1s';
            project[i].style.display = 'block'
          }
        } else {
          for (i = 0; i < project.length; i++) {
            project[i].style.display = 'none';
          }
        }
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='home-container'>
        <div style={{
          backgroundImage: !isMobile ? 'url("../assets/images/iconic/moon.svg")' : ''
        }} className={!isMobile ? 'header_container parallax' : 'header_container'}>
          {
            !isMobile ?
              <Particles className='particles' params={{
                "particles": {
                  "number": {
                    "value": 100,
                    "density": {
                      "enable": false
                    }
                  },
                  "size": {
                    "value": 10,
                    "random": true
                  },
                  "move": {
                    "direction": "bottom",
                    "out_mode": "out"
                  },
                  "line_linked": {
                    "enable": false
                  }
                },
                "interactivity": {
                  "events": {
                    "onclick": {
                      "enable": true,
                      "mode": "remove"
                    }
                  },
                  "modes": {
                    "remove": {
                      "particles_nb": 10
                    }
                  }
                }
              }} />
              :
              <span></span>
          }
          <img className='mountain-img' src='../assets/images/iconic/mountains.svg' alt='mountain' />
          <div className='header-content'>
            <p className='my-name'>Lawrence Douglas</p>
            <p className='my-desc'>Your friendly neighboorhood Web guy, UIUX guy, and Graphic Designer guy. I work to please my fellow huumans with good visuals and a well thought out plan.</p>          
          </div>
        </div>
        <div id='top-web-projects-container'>
          <br />
          <div className='section-header'>Top Web Projects</div>
          <div className='home-projects-container'>
            <div className='project'>
              <div className='circle'></div>
            </div>
            <div className='project'>
              <div className='circle'></div>
            </div>
            <div className='project'>
              <div className='circle'></div>
            </div>
          </div>
        </div>
        <div id='top-graphic-design-projects-container'></div>
        <div id='best-photographs-container'></div>
      </div>
    );
  }
}

export default Home;