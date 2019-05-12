//Imports 
import React, { Component } from 'react';
import GraphicDesign from './portfolio_pages/GraphicDesign';
import WebDevelopment from './portfolio_pages/WebDevelopment';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioSection: 1
        }
    }

    onWebClick() {
        this.setState({ portfolioSection: 1 });
        document.getElementById('web-link').classList.add('portfolio-active');
        document.getElementById('graphic-link').classList.remove('portfolio-active');
        // document.getElementById('photo-link').classList.remove('portfolio-active');
    }

    onGraphicClick() {
        this.setState({ portfolioSection: 2 });
        document.getElementById('web-link').classList.remove('portfolio-active');
        document.getElementById('graphic-link').classList.add('portfolio-active');
        // document.getElementById('photo-link').classList.remove('portfolio-active');
    }

    onPhotoClick() {
        this.setState({ portfolioSection: 3 });
        document.getElementById('web-link').classList.remove('portfolio-active');
        document.getElementById('graphic-link').classList.remove('portfolio-active');
        // document.getElementById('photo-link').classList.add('portfolio-active');
    }

    componentDidMount() {
        document.getElementById('web-link').classList.add('portfolio-active');
    }

    render() {
        var content;
        if (this.state.portfolioSection === 1) {
            content = <WebDevelopment />
        }
        if (this.state.portfolioSection === 2) {
            content = <GraphicDesign />
        }
        
        return (
            <div className='portfolio-container'>
                <div className='portfolio-links'>
                    <span onClick={this.onWebClick.bind(this)} id='web-link' className='portfolio-link' to='/work/web-dev'>Web Development</span>
                    <span className='project-divider'> | </span>
                    <span onClick={this.onGraphicClick.bind(this)} id='graphic-link' className='portfolio-link' to='/work/graphic-design'>Graphic Design</span>
                    {/* <span> | </span>
                    <span onClick={this.onPhotoClick.bind(this)} id='photo-link' className='portfolio-link disable-link' to='/work/photography'>Photography</span> */}
                </div>
                <div className='content-container'>
                    {content}
                </div>
            </div>
        );
    }
}

export default Work;