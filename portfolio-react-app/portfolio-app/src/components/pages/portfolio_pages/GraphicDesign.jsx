//Imports
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// graphic_design_work JSON
const work = require('../../../json/graphic_design_work');
const myWork = work.gd_work;

// Graphic Design item variables
var id;
var slides = document.getElementsByClassName('g-modal-content');
var i;

// Slideshow
var slideIndex = 1;
var slide;

const showSlides = (n) => {
    console.log('N: ' + n);
    console.log('Length: ' + slides.length);
    console.log('Slide Index: ' + slideIndex)
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideProject(slideIndex - 1);
    slides[slideIndex - 1].style.display = 'flex';
}

const slideProject = (n) => {
    var content = document.getElementsByClassName('g-modal-middle');
    if (slide === true) {
        content[n].style.animation = 'moveImageRight';
        content[n].style.animationDuration = '1s';
    } else if (slide === false) {
        content[n].style.animation = 'moveImageLeft';
        content[n].style.animationDuration = '1s';
    }
}

class GraphicDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            projects: []
        }
    }

    imageClicked(e) {
        slide = '';
        this.setState({ modal: true });
        id = e.target.parentElement.children.item(1).children.item(0).textContent;

        showSlides(slideIndex = id);
        var modal = document.getElementById('myModal').style;
        modal.animation = 'openImage';
        modal.animationDuration = '1s';

        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        var modal = document.getElementById('myModal').style;
        modal.animation = 'closeImage';
        modal.animationDuration = '1s';
        var grid = document.getElementById('img-grid').style;
        grid.pointerEvents = 'none';
        setTimeout(() => {
            this.setState({ modal: false });
            grid.pointerEvents = 'auto';
        }, 1000)
        document.body.style.overflow = 'auto';
    }

    plusSlides() {
        slide = true;
        console.log(slideIndex);
        showSlides(slideIndex+=1);
        console.log(slideIndex);
    }

    minusSlides() {
        slide = false;
        showSlides(slideIndex -= 1);
    }

    componentDidMount() {
        var myProjects = [];
        myWork.map((project) => {
            myProjects.push(project);
            return myProjects;
        })
        this.setState({ projects: myProjects });
    }

    render() {
        return (
            <div className='graphic-design-container'>
                <div id='img-grid' className='img-grid'>
                    {
                        myWork.map((project) => {
                            return (
                                <div key={project.id} className='gd-item' style={{ backgroundColor: 'transparent' }}>
                                    <div>
                                        <img className='gd-item-img' src={project.img} alt={project.imgName} />
                                        <span style={{ display: 'none' }}>
                                            <p>{project.id}</p>
                                        </span>
                                        <span onClick={(e) => this.imageClicked(e)} className='gd-item-inner' style={{ backgroundColor: project.color }}>
                                            <img style={{ display: 'none' }} alt={''} src={project.img} />
                                            <span className='gd-item-info'>
                                                <p style={{ display: 'none' }}>{project.id}</p>
                                                <h2 className='info-title'>{project.title}</h2>
                                                <p className='info-desc'>{project.desc}</p>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div id="myModal" className="g-modal" style={{
                    display: this.state.modal ?
                        'block' : 'none'
                }}>
                    {
                        this.state.projects.map((project) => {
                            return (
                                <div key={project.id} className='g-modal-content' style={{ backgroundColor: project.color }}>
                                    <div className='g-modal-top'>
                                        <div className='modalFlex-1'>
                                            <div className="gd-modal-moreInfo"><FontAwesomeIcon icon={faInfoCircle} />
                                                <span className='gd-tooltip-right'>In development</span>
                                            </div>
                                        </div>
                                        <div className='modalFlex-2'>
                                            <div onClick={this.closeModal.bind(this)} className="gd-modal-close">&times;</div>
                                        </div>
                                    </div>
                                    <div className='g-modal-middle'>
                                        <p style={{ display: 'none' }}>{project.id}</p>
                                        <img className='expanded-gd-img' alt={project.imgName} src={project.img} width='50%' />
                                        <div className='gd-modal-project-info'>
                                            <div className='gd-modal-info-title'>{project.title}</div>
                                            <div className='gd-modal-info-desc'>{project.desc}</div>
                                        </div>
                                    </div>
                                    <div className='g-modal-bottom'>
                                        <div className='modalFlex-2 modal-padding-right'>
                                            <FontAwesomeIcon
                                                onClick={this.minusSlides}
                                                className='icon-medium' icon={faArrowLeft} />
                                        </div>
                                        <div className='modalFlex-1 modal-padding-left'>
                                            <FontAwesomeIcon
                                                onClick={this.plusSlides}
                                                className='icon-medium' icon={faArrowRight} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default GraphicDesign;
