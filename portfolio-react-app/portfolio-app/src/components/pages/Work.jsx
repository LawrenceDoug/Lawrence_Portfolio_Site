//Imports 
import React, { Component } from 'react';
import GraphicDesign from './portfolio_pages/GraphicDesign';

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolioSection: 0
        }
    }
    onWebClick() {
        this.setState({ portfolioSection: 1 });
    }
    onGraphicClick() {
        this.setState({ portfolioSection: 2 });
    }
    onPhotoClick() {
        this.setState({ portfolioSection: 3 });
    }
    render() {
        var content;
        if (this.state.portfolioSection === 2) {
            content = <GraphicDesign/>
        }
        return (
            <div className='main-work-container'>
                <div className='portfolio-container'>
                    <div className='portfolio-links'>
                        <span onClick={this.onWebClick.bind(this)} className='portfolio-link' to='/work/web-dev'>Web Development</span>
                        <span> | </span>
                        <span onClick={this.onGraphicClick.bind(this)} className='portfolio-link' to='/work/graphic-design'>Graphic Design</span>
                        <span> | </span>
                        <span  onClick={this.onPhotoClick.bind(this)} className='portfolio-link disable-link' to='/work/photography'>Photography</span>
                    </div>
                    <div className='content-container'>
                        {content}
                    </div>
                </div>
            </div>
        );
    }
}

export default Work;