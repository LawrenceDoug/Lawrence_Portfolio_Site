// Import 
import React, { Component } from 'react';

// web_projects JSON
const work = require('../../../json/web_projects');
const myWork = work.web_work;



class WebDevelopment extends Component {

    // componentDidMount() {
    //     document.body.style.overflow = 'hidden';
    // }

    // componentWillUnmount() {
    //     document.body.style.overflow = 'auto';
    // }

    render() {
        return (
            <div className='web-development-container'>
                {
                    myWork.map((project) => {
                        return (
                            <div className='projects-container'>
                                <div className='project-container'>
                                    <img className='project-img' src={project.img1} alt={project.img1Name} />
                                    <div className='project-description-container'>
                                        <div className='project-title'>{project.title1}</div>
                                        <div className='project-description'>{project.desc1}</div>
                                        <div className='btn-container'>
                                            <a href={project.link1}>
                                                <div className='web-btn'>Click to View</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className='project-container'>
                                    <img className='project-img' src={project.img2} alt={project.img2Name} />
                                    <div className='project-description-container'>
                                        <div className='project-title'>{project.title2}</div>
                                        <div className='project-description'>{project.desc2}</div>
                                        <div className='btn-container'>
                                            <a href={project.link2}>
                                                <div className='web-btn'>Click to View</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default WebDevelopment;