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
                        <div className='titles'>Full Stack Web Dev | Graphic Design | UIUX</div>
                    </div>
                    <div className='description'>
                        <p className='about-desc-title'>F O U N D A T I O N</p>
                        <br />
                        <div>
                            I'm a very hard worker indeed as my motivations stem from the support I can provide for my friends and family if I succeed. I am one with many goals and aspirations, in which case, they're here to drive my ambitions. To accomplish anything, I need to take initiative and actually do it first. "They always say time changes things, but you actually have to change them yourself" ~ Andy Warhol.
                            <br />
                            <br />
                            I'm constantly looking for new ways to improve upon myself, and the only way to do that is through learning. That is why I live by the phrase "Learning is Life".
                        </div>
                        <br />
                        <p className='about-desc-title'>P R O J E C T S</p>
                        <br />
                        <div>
                            I've worked on various projects that include the technologies listed below. These projects range from basic small scale computer applications to large scale full-stack web applications
                            <br />
                            <br />
                            <i>Technologies Used: </i>
                            HTML5 | CSS3 | JavaScript ES6 | UI/UX | Git | React.js | Redux | Angular | Express.js | Node.js | MongoDB | Adobe CC | Microsoft Office | Git | SASS | NPM | Microsoft SQL Server | Agile Project Development | Scrum | Python | Ruby | Pug | C# | Android Studio | Visual Studio (Code) | Java | Eclipse | ASP.NET MVC | Cross Browser Development
                        </div>
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
                        <div className='experiences'>
                            <div className='experience-main-title'>EXPERIENCE</div>
                            {
                                myExperiences.map((experience) => {
                                    if (experience.type === 'experience') {
                                        return (
                                            <div key={experience.id} className={
                                                experience.id % 2 === 0 ?
                                                    'experience2' : 'experience1'
                                            }>
                                                <div className='experience-title'>{experience.title}</div>
                                                <div className='experience-location'>{experience.location}</div>
                                                <div className='experience-time'>{experience.time}</div>
                                                <br />
                                                <pre className='experience-description'>{experience.description}</pre>
                                            </div>
                                        )
                                    } else {
                                        return '';
                                    }
                                })
                            }
                            <div className='experience-main-title'>EDUCATION</div>
                            {
                                myExperiences.map((experience) => {
                                    if (experience.type === 'education') {
                                        return (
                                            <div key={experience.id} className={
                                                experience.id % 2 === 0 ?
                                                    'experience2' : 'experience1'
                                            }>
                                                <div className='experience-title'>{experience.title}</div>
                                                <div className='experience-location'>{experience.location}</div>
                                                <div className='experience-time'>{experience.time}</div>
                                                <br />
                                                <pre className='experience-description'>{experience.description}</pre>
                                            </div>
                                        )
                                    } else {
                                        return '';
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;