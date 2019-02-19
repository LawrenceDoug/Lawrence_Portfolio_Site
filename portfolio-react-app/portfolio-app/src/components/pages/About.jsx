//Imports
import React, { Component } from 'react';

//Experience JSON
const experiences = require('../../json/experience');
const myExperiences = experiences.experiences;

//Skills JSON
const skills = require('../../json/skills');
const mySkills = skills.skills;

//Images
const Lawrence = require('../../assets/images/personal/Lawrence.jpg');

class About extends Component {
    render() {
        return (
            <div className='about-container'>
                <div className='personal-info-container'>
                    <img className='personal-pic' src={Lawrence} alt="It's me!" />
                    <div className='personal-info'>
                        <div className='name'>Lawrence Douglas</div>
                        <div className='titles'>Web Dev | Graphic Design | UI/UX</div>
                    </div>
                    <div className='description'>
                        I am an aspiring web developer with an interest in UIUX work, but I'm open to working on front-end and back-end web development.

                        Developed various skills in HTML / CSS / JavaScript, non-relational solutions such as MongoDB, and relational solutions such as Microsoft SQL Server.

                        Very familiar with the MERN (MongoDB, Express, ReactJS, Node.js) stack. Worked with this project structure whilst working on my capstone project for Neumont College of Computer Science. The project was dubbed Game Speak and it is a live video chatting site that allows for online multiplayer gaming and video chatting simultaneously.
                    </div>
                </div>
                <div className='extra-info-container'>
                    <div className='skills-container'>
                        <div className='skills-main-title'>SKILLS</div>
                        <div className='skills'>
                            {
                                mySkills.map((skill) => {
                                    return (
                                        <a key={skill.id} className='skill-link' href={skill.link} alt={skill.title} target='_blank' rel="noopener noreferrer">
                                            <div className='skill-padding'>
                                                <div className='skill'>
                                                    {skill.title}
                                                </div>
                                            </div>
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className='experience-container'>
                        <div className='experience-main-title'>EXPERIENCE</div>
                        {
                            myExperiences.map((experience) => {
                                return (
                                    <div key={experience.id} className={
                                        experience.id % 2 === 0 ?
                                            'experience1' : 'experience2'
                                    }>
                                        <div className='experience-title'>{experience.title}</div>
                                        <div className='experience-location'>{experience.location}</div>
                                        <div className='experience-time'>{experience.time}</div>
                                        <br />
                                        <div className='experience-description'>{experience.description}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default About;