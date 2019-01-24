import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';
import '../css/work.css';


const screenSize = {
    smartphone: '@media only screen and (max-width: 479px)'
}

const styles = StyleSheet.create({
    main_container: {
        width: '100%',
        height: '100%',
        margin: '0',
        padding: '0',
        // backgroundImage: 'linear-gradient(#f953c6, #b91d73)',
    },
    portfolio_container: {
        marginTop: '60px',
        padding: '5rem',
        paddingTop: '2rem',
        paddingLeft: '5rem',
    },
    portfolio_links: {
        paddingBottom: '3rem'
    }
});

class Work extends Component {
    render() {
        return (
            <div className={css(styles.main_container)}>
                <div className={css(styles.portfolio_container)}>
                    <div className={css(styles.portfolio_links)}>
                        <span className='portfolio-link' to='/work/web-dev'>Web Development</span>
                        <span className='divider'> | </span>
                        <span className='portfolio-link' to='/work/graphic-design'>Graphic Design</span>
                        <span className='divider'> | </span>
                        <span className='portfolio-link' to='/work/photography'>Photography</span>
                    </div>
                    <div className={css(styles.content_container)}>
                        asdasdasda
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;