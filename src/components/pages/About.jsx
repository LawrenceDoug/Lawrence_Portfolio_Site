//Imports
import React, { Component } from 'react';

//Experience JSON
const experiences = require('../../json/experience');
const myExperiences = experiences.experiences;

//Skills JSON
const skills = require('../../json/skills');
const mySkills = skills.skills;

class About extends Component {
    render() {
        return (
            <div className='about-container'>
                <div className='personal-info-container'>
                    <img className='personal-pic' src='../assets/images/personal/Lawrence.jpg' alt="It's me!" />
                    <div className='personal-info'>
                        <div className='name'>Lawrence Douglas</div>
                        <div className='titles'>Web Dev | Graphic Design | UIUX</div>
                    </div>
                    <div className='description'>
                        Web developer with an overarching interest in UIUX work, but very keen on the arts of full stack web development. My skills range from HTML / CSS / JavaScript to non-relational storage solutions such as MongoDB and relational solutions such as Microsoft SQL Server. My preferred project structure usually consists of the MERN stack which would be MongoDB, Express, ReactJS, and Node.js.
                    </div>
                </div>
                <div className='extra-info-container'>
                    <div className='skills-container'>
                        <div className='skills-main-title'>CORE SKILLS</div>
                        <div className='skills'>
                            {
                                mySkills.map((skill) => {
                                    if (skill.type === 'core') {
                                        return (
                                            <a key={skill.id} className='skill-link hvr-grow' href={skill.link} alt={skill.title} target='_blank' rel='noopener noreferrer'>
                                                <div className='skill-padding'>
                                                    <div className='skill'>
                                                        {skill.title}
                                                    </div>
                                                </div>
                                            </a>
                                        )
                                    } else {
                                        return (
                                            <span key={skill.id + '-empty'}></span>
                                        )
                                    }
                                })
                            }
                        </div>
                        <div className='skills-main-title'>SOFT SKILLS</div>
                        <div className='skills'>
                            {
                                mySkills.map((skill) => {
                                    if (skill.type === 'soft') {
                                        return (
                                            <div key={skill.id} className='hvr-grow' alt={skill.title}>
                                                <div className='skill-padding'>
                                                    <div className='skill'>
                                                        {skill.title}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    } else {
                                        return (
                                            <span key={skill.id + '-empty'}></span>
                                        )
                                    }
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
                                            'experience2' : 'experience1'
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