// Import 
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// web_projects JSON
const work = require('../../../json/web_projects');
const myWork = work.web_work;

var i;
var slides = document.getElementsByClassName('projects-container');

// Slideshow
var slideIndex = 1;

const showSlides = (n) => {
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.animation = 'carousel';
    slides[slideIndex - 1].style.animationDuration = '1s';
    slides[slideIndex - 1].style.display = 'flex';
}

class WebDevelopment extends Component {
    plusSlides() {
        showSlides(slideIndex += 1);
    }

    minusSlides() {
        showSlides(slideIndex -= 1);
    }

    componentDidMount() {
        showSlides(slideIndex);
    }

    render() {
        return (
            <div className='web-development-container'>
                <div className='arrowFlex'>
                    <FontAwesomeIcon
                        onClick={this.minusSlides}
                        className='icon-medium' icon={faArrowLeft} />
                </div>
                {
                    myWork.map((project) => {
                        return (
                            <div key={project.id} className='projects-container'>
                                <div className='project-container'>
                                    <img className='project-img' src={project.img1} alt={project.img1Name} />
                                    <div className='project-description-container'>
                                        <div className='project-title'>{project.title1}</div>
                                        <div className='project-description'>{project.desc1}</div>
                                        <div className='btn-container'>
                                            <a href={project.link1} target='_blank' rel="noopener noreferrer">
                                                <div className='web-btn hvr-grow'>Click to View</div>
                                            </a>
                                        </div>
                                    </div>
                                    {
                                        project.type1 === "wip" ?
                                            <div className='work-in-progress'>
                                                WIP
                                            </div>
                                            :
                                            <s></s>
                                    }
                                </div>
                                <div className='project-container'>
                                    <img className='project-img' src={project.img2} alt={project.img2Name} />
                                    <div className='project-description-container'>
                                        <div className='project-title'>{project.title2}</div>
                                        <div className='project-description'>{project.desc2}</div>
                                        <div className='btn-container'>
                                            <a href={project.link2} target='_blank' rel="noopener noreferrer">
                                                <div className='web-btn hvr-grow'>Click to View</div>
                                            </a>
                                        </div>
                                    </div>
                                    {
                                        project.type2 === "wip" ?
                                            <div className='work-in-progress'>
                                                WIP
                                            </div>
                                            :
                                            <s></s>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div className='arrowFlex'>
                    <FontAwesomeIcon
                        onClick={this.plusSlides}
                        className='icon-medium' icon={faArrowRight} />
                </div>
            </div>
        );
    }
}

export default WebDevelopment;