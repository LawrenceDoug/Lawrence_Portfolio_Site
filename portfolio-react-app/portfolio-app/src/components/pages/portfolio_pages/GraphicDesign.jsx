//Imports
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// graphic_design_work JSON
const work = require('../../../json/graphic_design_work');
const myWork = work.gd_work;

// Graphic Design item variables
var id;

// Slideshow
var slideIndex = 1;

const showSlides = (n) => {
    var i;
    var slides = document.getElementsByClassName('g-modal-content');
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'flex';
}

class GraphicDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            projects: []
        }
    }

    squareClicked(e) {
        this.setState({ modal: true });
        id = e.target.parentElement.children.item(1).children.item(0).textContent;

        showSlides(slideIndex = id);
        document.body.style.overflow = 'hidden';
        console.log(slideIndex);
    }

    closeModal() {
        this.setState({ modal: false });
        document.body.style.overflow = 'auto';
    }

    plusSlides() {
        console.log(slideIndex);
        showSlides(slideIndex += 1);
        console.log(slideIndex);
    }

    minusSlides() {
        console.log(slideIndex);
        showSlides(slideIndex -= 1);
        console.log(slideIndex);
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
                <div className='img-grid'>
                    {
                        myWork.map((project) => {
                            return (
                                <div key={project.id} className='gd-item' style={{ backgroundColor: 'transparent' }}>
                                    <div>
                                        <img className='gd-item-img' src={project.img} alt={project.imgName} />
                                        <span style={{ display: 'none' }}>
                                            <p>{project.id}</p>
                                        </span>
                                        <span onClick={(e) => this.squareClicked(e)} className='gd-item-inner' style={{ backgroundColor: project.color }}>
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
                                            <div className="gd-modal-moreInfo"><FontAwesomeIcon icon={faInfoCircle} /></div>
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
