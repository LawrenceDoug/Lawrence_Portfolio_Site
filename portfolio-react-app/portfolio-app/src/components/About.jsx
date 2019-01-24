import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Lawrence = require('../assets/images/personal/Lawrence.jpg');

const screenSize = {
    smartphone: '@media only screen and (max-width: 479px)'
}

const styles = StyleSheet.create({
    about_container: {
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        padding: '0',
        marginTop: '60px',
        width: '100%',
        height: '100%',
    },
    personal_pic: {
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        margin: 'auto',
        padding: '1rem',
        width: '400px',
        height: '400px',
        borderRadius: '1000px'
    },
    personal_info: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        justifyContent: 'center',
        margin: 'auto',
        textAlign: 'center',
    },
    name: {
        color: '#1C191F',
        fontSize: '2rem',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: '1',
    },
    titles: {
        color: '#1C191F',
        fontSize: '1.3rem',
        textTransform: 'uppercase',
        fontWeight: 'lighter',
        letterSpacing: '1',
    },
    description: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        justifyContent: 'center',
        color: '#1C191F',
        margin: 'auto',
        padding: '1rem',
        textIndent: '50px',
        textAlign: 'left',
        fontSize: '1.2rem',
        fontWeight: 'lighter',
    }
});

class About extends Component {
    componentDidUpdate() {
        const modal = localStorage.getItem('modal');
        if (modal === 'true') {
            var about = document.getElementById('about_container').style;
            about.overflowY = 'hidden';
        } else {
            var about = document.getElementById('about_container').style;
            about.overflowY = 'auto';
        }
    }
    render() {
        return (
            <div id='about_container' className={css(styles.about_container)}>
                <img className={css(styles.personal_pic)} src={Lawrence} alt="It's me!" />
                <div className={css(styles.personal_info)}>
                    <div className={css(styles.name)}>Lawrence Douglas</div>
                    <div className={css(styles.titles)}>Web Dev | Graphc Design | UIUX</div>
                </div>
                <div className={css(styles.description)}>
                    I am an aspiring web developer with an interest in UIUX work, but I'm open to working on front-end and back-end web development.
    
                    Developed various skills in HTML / CSS / JavaScript, non-relational solutions such as MongoDB, and relational solutions such as Microsoft SQL Server.
    
                    Very familiar with the MERN (MongoDB, Express, ReactJS, Node.js) stack. Worked with this project structure whilst working on my capstone project for Neumont College of Computer Science. The project was dubbed Game Speak and it is a live video chatting site that allows for online multiplayer gaming and video chatting simultaneously.
                </div>
            </div>
        );
    }
}

export default About;