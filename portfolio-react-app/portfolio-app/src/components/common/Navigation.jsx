// Imports
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Resume from '../../documents/Resume.pdf';
// import { withRouter } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faTwitch, faYoutube, faTwitter, faPinterest, faFacebook } from '@fortawesome/free-brands-svg-icons';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            fname: '',
            lname: '',
            email: '',
            subject: '',
            description: ''
        }

        this.onChange = this.onChange.bind(this);
        this.sendEmail = this.sendEmail.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleContactModal() {
        this.setState({ modal: true });
        var contact = document.getElementById('contact');
        contact.style.color = '#8884FF';  
        contact.style.paddingBottom = '5px';
        contact.style.borderBottom = '2px solid currentColor';     
        contact.style.pointerEvents = 'none';
        var location = document.getElementById('location');
        location.style.pointerEvents = 'none';
        var modal = document.getElementById('myModal').style;
        modal.animation = 'animatetop';
        modal.animationDuration = '1s';
        document.body.style.overflow = 'hidden';
    }

    handleLocationModal() {

    }

    closeModal() {
        this.setState({
            fname: '',
            lname: '',
            email: '',
            subject: '',
            description: ''
        });       
        var modal = document.getElementById('myModal').style;
        modal.animation = 'animatestop';
        modal.animationDuration = '1s';
        document.body.style.overflow = 'auto';

        setTimeout(() => {
            this.setState({ modal: false });
            localStorage.setItem('modal', 'false');
            var contact = document.getElementById('contact');
            contact.style.pointerEvents = 'auto';
            contact.style.color = '';  
            contact.style.paddingBottom = '';
            contact.style.borderBottom = '';     
            var location = document.getElementById('location');
            location.style.pointerEvents = 'auto';
        }, 1000)
    }

    sendEmail(e) {
        e.preventDefault();
        window.open(`mailto:lawrence.cwd@gmail.com?subject=${this.state.subject}&body=${this.state.description}`);
    }

    render() {
        return (
            <div className='nav'>
                <div className='nav-logo'>
                    <NavLink to='/' className='logo' exact={true}>LAWRENCE DOUGLAS</NavLink>
                </div>
                <div className='nav-links'>
                    <NavLink to='/' className='nav-link' exact={true}>Intro</NavLink>
                    <NavLink to='/about' className='nav-link'>About</NavLink>
                    <NavLink to='/work' className='nav-link'>Work</NavLink>
                    <NavLink to={Resume} className='nav-link' target='_blank'>Resume</NavLink>
                </div>
                <div className='nav-contact'>
                    <div onClick={this.handleContactModal.bind(this)} id='contact' className='contact'>Contact</div>
                    <div onClick={this.handleLocationModal.bind(this)} id='location' className='contact'>Location</div>
                </div>

                <div id='myModal' className='modal' style={{
                    display: this.state.modal ?
                        'block' : 'none'
                }}>
                    <div className='modal-content'>
                        <div onClick={this.closeModal.bind(this)} className='close'>&times;</div>
                        <form onSubmit={this.sendEmail} className='email-form'>
                            <div className='names'>
                                <div className='flex-column'>
                                    <div className='label-padding'>First Name*</div>
                                    <input type='text' className='nameBox'
                                        name='fname'
                                        value={this.state.fname}
                                        onChange={this.onChange}
                                    ></input>
                                </div>
                                <div className='flex-column'>
                                    <div className='label-padding'>Last Name*</div>
                                    <input type='text' className='nameBox'
                                        name='lname'
                                        value={this.state.lname}
                                        onChange={this.onChange}
                                    ></input>
                                </div>
                            </div>
                            <br />
                            <div className='flex-column'>
                                <div className='label-padding'>Email*</div>
                                <input type='email' className='longBox'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                ></input>
                            </div>
                            <br />
                            <div className='flex-column'>
                                <div className='label-padding'>Subject*</div>
                                <input type='text' className='longBox'
                                    name='subject'
                                    value={this.state.subject}
                                    onChange={this.onChange}
                                ></input>
                            </div>
                            <br />
                            <div className='flex-column'>
                                <div className='label-padding'>Description*</div>
                                <textarea className='bigBox'
                                    name='description'
                                    value={this.state.description}
                                    onChange={this.onChange}
                                ></textarea>
                            </div>
                            <br />
                            <div className='flex-row-column'>
                                <div className='flex-column'>
                                    <input type='submit' value='Send' className='send-btn'/>
                                </div>
                                <div className='flex-row'>
                                    <div className='social-container'>
                                        <div className='social'>Social</div>
                                        <div>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/lawrencecwdouglas/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/the_sol_designer/'><FontAwesomeIcon icon={faInstagram} /></a>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://twitter.com/TheSolDesigner'><FontAwesomeIcon icon={faTwitter} /></a>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/channel/UCWMAk7fyBexv0Mm4gxOaRuw?view_as=subscriber'><FontAwesomeIcon icon={faYoutube} /></a>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.twitch.tv/tr_lonesol'><FontAwesomeIcon icon={faTwitch} /></a>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/ShepherdSupreme/?ref=bookmarks'><FontAwesomeIcon icon={faFacebook} /></a>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.pinterest.com/joxiousdesigns/'><FontAwesomeIcon icon={faPinterest} /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-column'>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;