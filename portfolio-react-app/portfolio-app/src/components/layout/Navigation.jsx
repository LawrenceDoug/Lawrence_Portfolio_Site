import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/navigation.css';
import { StyleSheet, css } from 'aphrodite';
import Resume from '../../documents/Resume.pdf';

const screenSize = {
    smartphone: '@media only screen and (max-width: 479px)'
}

const styles = StyleSheet.create({
    body: {
        overflow: 'hidden',
        [screenSize.smartphone]: {
            webkitOverflowScrolling: 'touch'
        }
    },
    nav: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1',
        margin: '0',
        padding: '1rem',
    },
    nav_logo: {
        flex: '1'
    },
    nav_links: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1',
        justifyContent: 'center'
    },
    nav_contact: {
        display: 'flex',
        flex: '1',
        justifyContent: 'flex-end',
    }
});

class Navigation extends Component {
    render() {
        return (
            <div className={css(styles.nav)}>
                <div className={css(styles.nav_logo)}>Logo</div>
                <div className={css(styles.nav_links)}>
                    <Link to='/' className='nav_link'>Intro</Link>
                    <Link to='/about' className='nav_link'>About</Link>
                    <Link to='/work' className='nav_link'>Work</Link>
                    <Link to={Resume} className='nav_link' target='_blank'>Resume</Link>
                </div>
                <div className={css(styles.nav_contact)}>
                    <Link to='/contact' className='nav_contact'>Contact</Link>
                </div>
            </div>
        );
    }
}

export default Navigation;