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
      if (!isMobile && window.innerWidth > 900) {
        if (this.isOnScreenY(webProjects)) {
          for (i = 0; i < project.length; i++) {
            project[0].style.animation = 'flowRight';
            project[0].style.animationDuration = '1.5s';
            project[1].style.animation = 'flowUp';
            project[1].style.animationDuration = '1.5s';
            project[2].style.animation = 'flowLeft';
            project[2].style.animationDuration = '1.5s';
            project[i].style.display = 'block';
          }
        } else {
          for (i = 0; i < project.length; i++) {
            project[i].style.display = 'none';
          }
        }
      } else {
        for (i = 0; i < project.length; i++) {
          project[i].style.display = 'block';
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
              <div className='window'></div>
          }
          {
            !isMobile ?
              <div>
                <img className='mountain-img' src='../assets/images/iconic/mountains.svg' alt='mountain' />
                <div className='header-content'>
                  <p className='my-name'>Lawrence Douglas</p>
                  <p className='my-desc'>Your friendly neighboorhood <strong>Full Stack Web Developer</strong> guy, <strong>UI/UX</strong> guy, and <strong>Graphic Designer</strong> guy. I work to please my fellow huumans with good visuals and a well thought out plan.</p>
                </div>
              </div>
              :
              <div></div>
          }
        </div>
        <div id='top-web-projects-container'>
          <br />
          <div className='section-header'>Top Web Projects</div>
          <div className='home-projects-container'>
            <div className='project'>
              <p className='top-project-title'>GameSpeak</p>
              <img className='top-project-img' src='../assets/images/webproj/Mic.svg' alt='GameSpeak Logo' />
              <p className='top-project-desc'>GameSpeak is a live video chatting service that also allows users to play games with each other. This project utilizes the MERN Stack, Redux, Socket.io, Passport JS, and the WebRTC API. It is still a work in progress.</p>
              <a href='https://lit-oasis-10043.herokuapp.com/' target='_blank' rel='noopener noreferrer'><div className='top-project-btn hvr-grow'>Click to View</div></a>
            </div>
            <div className='project'>
              <p className='top-project-title'>Angular Flipbook</p>
              <img className='top-project-img' src='../assets/images/webproj/flipbookapp.svg' alt='Flipbook Logo' />
              <p className='top-project-desc'>How to Believe in Yourself, an online flipbook Angular application that gives a step by step guide on how to believe in yourself. It served the purpose of teaching the basic concepts of routing and components.</p>
              <a href='https://howtobelieveinyourself.herokuapp.com' target='_blank' rel='noopener noreferrer'><div className='top-project-btn hvr-grow'>Click to View</div></a>
            </div>
            <div className='project'>
              <p className='top-project-title'>Untitled Project</p>
              <img className='top-project-img' alt='something will go here' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png' />
              <p className='top-project-desc'>Give me some time. I'll have a project here soon.</p>
              <a href='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png' target='_blank' rel='noopener noreferrer'><div className='top-project-btn hvr-grow'>Click to View</div></a>
            </div>
          </div>
        </div>
        {/* <div id='top-graphic-design-projects-container'></div>
        <div id='best-photographs-container'></div> */}
      </div>
    );
  }
}

export default Home;