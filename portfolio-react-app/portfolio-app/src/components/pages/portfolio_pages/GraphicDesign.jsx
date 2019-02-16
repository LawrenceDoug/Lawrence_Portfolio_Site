//Imports
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

// graphic_design_work JSON
const work = require('../../../json/graphic_design_work');
const myWork = work.gd_work;

var imgSrc;
var title;
var description;
var color;

class GraphicDesign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }

    squareClicked(e) {
        this.setState({ modal: true });
        imgSrc = e.target.parentElement.children.item(0).src;
        title = e.target.parentElement.children.item(1).children.item(0).textContent;
        description = e.target.parentElement.children.item(1).children.item(1).textContent;
        color = e.target.parentElement.children.item(1).children.item(2).textContent;
        console.log(e.target);
    }

    closeModal() {
        this.setState({ modal: false });
    }

    render() {
        return (
            <div>
                <div className='img-grid-row'>
                    <div className='img-grid-column'>
                        {
                            myWork.map((project) => {
                                return (
                                    project.id < 2 ?
                                        <div key={project.id} className='gd-item' style={{ backgroundColor: 'transparent' }}>
                                            <div>
                                                <img className='graphic-d-img' src={project.img} alt={project.imgName} />
                                                <span style={{ display: 'none' }}>
                                                    <h2>{project.title}</h2>
                                                    <p>{project.desc}</p>
                                                    <p style={{ display: 'none' }}>{project.color}</p>
                                                </span>
                                                <span onClick={(e) => this.squareClicked(e)} className='inner' style={{ backgroundColor: project.color }}>
                                                    <img style={{ display: 'none' }} src={project.img} />
                                                    <span className='info'>
                                                        <h2 className='gd-info-title'>{project.title}</h2>
                                                        <p className='gd-info-desc'>{project.desc}</p>
                                                        <p style={{ display: 'none' }}>{project.color}</p>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        :
                                        <div key={project.id + '-none'}></div>
                                )
                            })
                        }
                    </div>
                    <div className='img-grid-column'>
                        {
                            myWork.map((project) => {
                                return (
                                    project.id < 3 && project.id > 2 ?
                                        <div key={project.id} className='gd-item' style={{ backgroundColor: 'transparent' }}>
                                            <div>
                                                <img className='graphic-d-img' src={project.img} alt={project.imgName} />
                                                <span style={{ display: 'none' }}>
                                                    <h2>{project.title}</h2>
                                                    <p>{project.desc}</p>
                                                    <p style={{ display: 'none' }}>{project.color}</p>
                                                </span>
                                                <span onClick={(e) => this.squareClicked(e)} className='inner' style={{ backgroundColor: project.color }}>
                                                    <img style={{ display: 'none' }} src={project.img} />
                                                    <span className='info'>
                                                        <h2 className='gd-info-title'>{project.title}</h2>
                                                        <p className='gd-info-desc'>{project.desc}</p>
                                                        <p style={{ display: 'none' }}>{project.color}</p>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        :
                                        <div key={project.id + '-none'}></div>
                                )
                            })
                        }
                    </div>
                    <div className='img-grid-column'>
                        {
                            myWork.map((project) => {
                                return (
                                    project.id < 4 && project.id > 3 ?
                                        <div key={project.id} className='gd-item' style={{ backgroundColor: 'transparent' }}>
                                            <div>
                                                <img className='graphic-d-img' src={project.img} alt={project.imgName} />
                                                <span style={{ display: 'none' }}>
                                                    <h2>{project.title}</h2>
                                                    <p>{project.desc}</p>
                                                    <p style={{ display: 'none' }}>{project.color}</p>
                                                </span>
                                                <span onClick={(e) => this.squareClicked(e)} className='inner' style={{ backgroundColor: project.color }}>
                                                    <img style={{ display: 'none' }} src={project.img} />
                                                    <span className='info'>
                                                        <h2 className='gd-info-title'>{project.title}</h2>
                                                        <p className='gd-info-desc'>{project.desc}</p>
                                                        <p style={{ display: 'none' }}>{project.color}</p>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        :
                                        <div key={project.id + '-none'}></div>
                                )
                            })
                        }
                    </div>
                    <div className='img-grid-column'>
                        {
                            myWork.map((project) => {
                                return (
                                    project.id < 5 && project.id > 4 ?
                                        <div key={project.id} className='gd-item' style={{ backgroundColor: 'transparent' }}>
                                            <div>
                                                <img className='graphic-d-img' src={project.img} alt={project.imgName} />
                                                <span style={{ display: 'none' }}>
                                                    <h2>{project.title}</h2>
                                                    <p>{project.desc}</p>
                                                    <p style={{ display: 'none' }}>{project.color}</p>
                                                </span>
                                                <span onClick={(e) => this.squareClicked(e)} className='inner' style={{ backgroundColor: project.color }}>
                                                    <img style={{ display: 'none' }} src={project.img} />
                                                    <span className='info'>
                                                        <h2 className='gd-info-title'>{project.title}</h2>
                                                        <p className='gd-info-desc'>{project.desc}</p>
                                                        <p style={{ display: 'none' }}>{project.color}</p>
                                                    </span>
                                                </span>
                                            </div>
                                        </div>
                                        :
                                        <div key={project.id + '-none'}></div>
                                )
                            })
                        }
                    </div>
                </div>
                <div id="myModal" className="g-modal" style={{
                    display: this.state.modal ?
                        'block' : 'none'
                }}>
                    <div className='g-modal-content' style={{ backgroundColor: color }}>
                        <div className='g-modal-top'>
                            <div className="g-modal-moreInfo"><FontAwesomeIcon icon={faInfoCircle} /></div>
                            <div onClick={this.closeModal.bind(this)} className="g-modal-close">&times;</div>
                        </div>
                        <img className='expanded-graphic' src={imgSrc} width='50%' />
                        <div className='g-project-info'>
                            <div className='g-info-title'>{title}</div>
                            <div className='g-info-desc'>{description}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GraphicDesign;
