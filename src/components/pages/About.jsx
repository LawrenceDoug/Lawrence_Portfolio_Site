//Imports
import React, { Component } from 'react';

//Experience JSON
// const experiences = require('../../json/experience');
// const myExperiences = experiences.experiences;

//Skills JSON
// const skills = require('../../json/skills');
// const mySkills = skills.skills;

class About extends Component {
    render() {
        return (
            <div className='about-container'>
                <div className='personal-info-container'>
                    <img className='personal-pic' src='../../assets/images/personal/Lawrence.JPG' alt="It's me!" />
                    <div className='personal-info'>
                        <div className='name'>Lawrence Douglas</div>
                        <div className='titles'>Full Stack Web Dev | Graphic Design | UIUX</div>
                    </div>
                    <div className='description'>
                        <p className='about-desc-title'>F O U N D A T I O N</p>
                        <div>
                            Ya'know... hard work pays off in the end. It's what makes us stronger. No need to alarm yourselves, I won't tell you how to live your lives or deliver a motivational speech. However, what I will say is this, the hard work/effort I throw into myself and those around me have helped me in more ways than one. To me, it's about the journey and not about the destination. I like to focus on what it takes to get somewhere rather than where that place is. I work hard to get to where I need to be and where I want to be, and remember what it took to climb those stairs. That's all there is to it!
                            <br />
                            <br />
                            My work ethic stems from my motivated desire to support my friends and family through the successes that I garner. Also, one small tid bit I'm forgetting is, it's my humane desire to be the best at everything I do. I constantly look for new ways to improve upon myself, and the only way to do that is by gathering knowledge. "Knowledge is power" isn't that what they teach you in school. It's soo true though.
                            <br />
                            <br />
                            "They always say time changes things, but you actually have to change them yourself" ~ Andy Warhol.
                            <br />
                            <br />
                            One last thing... Smiles are free, so share them.
                        </div>
                        <br />
                        <p className='about-desc-title'>P R O J E C T S</p>
                        <div>
                            I've worked on various projects that included some of the technologies listed below. These projects range from basic small scale computer applications to large scale full-stack web applications
                            <br />
                            <br />
                            <i>Technologies Used: </i>
                            HTML5 | CSS3 | JavaScript ES6 | UI/UX | Git | React.js | Redux | Angular | Express.js | Node.js | MongoDB | Adobe CC | Microsoft Office | Git | SASS | NPM | Microsoft SQL Server | Agile Project Development | Scrum | Python | Ruby | Pug | C# | Android Studio | Visual Studio (Code) | Java | Eclipse | ASP.NET MVC | Cross Browser Development | Heroku
                        </div>
                    </div>
                </div>
                <div className='extra-info-container'>
                    {/* <div className='skills-container'>
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
                    </div> */}
                </div>
            </div>
        );
    }
}

export default About;