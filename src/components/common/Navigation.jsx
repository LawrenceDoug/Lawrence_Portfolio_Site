// Imports
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Resume from '../../documents/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faTwitch, faYoutube, faTwitter, faPinterest, faFacebook } from '@fortawesome/free-brands-svg-icons';


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contactModal: false,
            locationModal: false,
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
        this.setState({ contactModal: true });
        var contact = document.getElementById('contact');
        contact.style.color = '#8884FF';
        contact.style.paddingBottom = '5px';
        contact.style.borderBottom = '2px solid currentColor';
        contact.style.pointerEvents = 'none';
        var location = document.getElementById('location');
        location.style.pointerEvents = 'none';
        var modal = document.getElementById('contactModal').style;
        modal.animation = 'animatetop';
        modal.animationDuration = '1s';
        document.body.style.overflow = 'hidden';
    }

    closeContactModal() {
        this.setState({
            fname: '',
            lname: '',
            email: '',
            subject: '',
            description: ''
        });
        var modal = document.getElementById('contactModal').style;
        modal.animation = 'animatestop';
        modal.animationDuration = '1s';
        document.body.style.overflow = 'auto';

        setTimeout(() => {
            this.setState({ contactModal: false });
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

    handleLocationModal() {
        this.setState({ locationModal: true });
        // var contact = document.getElementById('contact');
        // contact.style.pointerEvents = 'none';
        var location = document.getElementById('location');
        location.style.color = '#8884FF';
        location.style.paddingBottom = '5px';
        location.style.borderBottom = '2px solid currentColor';
        location.style.pointerEvents = 'none';
        var modal = document.getElementById('locationModal').style;
        modal.animation = 'animatetop';
        modal.animationDuration = '1s';
        document.body.style.overflow = 'hidden';
    }

    closeLocationModal() {
        var modal = document.getElementById('locationModal').style;
        modal.animation = 'animatestop';
        modal.animationDuration = '1s';
        document.body.style.overflow = 'auto';

        setTimeout(() => {
            this.setState({ locationModal: false });
            localStorage.setItem('modal', 'false');
            var location = document.getElementById('location');
            location.style.pointerEvents = 'auto';
            location.style.color = '';
            location.style.paddingBottom = '';
            location.style.borderBottom = '';
            // var contact = document.getElementById('contact');
            // contact.style.pointerEvents = 'auto';
        }, 1000)
    }

    sendEmail(e) {
        e.preventDefault();
        window.open(`mailto:lawrence.cwd@gmail.com?subject=${this.state.subject}&body=${'Name: ' + this.state.fname + ' ' + this.state.lname + '\n Email: ' + this.state.email + '\n' + this.state.description}`);
    }

    render() {
        return (
            <div className='nav'>
                <div className='nav-logo'>
                    <NavLink to={Resume} className='logo' target='_blank'>LAWRENCE DOUGLAS</NavLink>
                </div>
                <div className='nav-links'>
                    <NavLink to='/' className='nav-link' exact={true}>Home</NavLink>
                    <NavLink to='/about' className='nav-link'>About</NavLink>
                    <NavLink to='/work' className='nav-link'>Work</NavLink>
                    <NavLink to={Resume} className='nav-link' target='_blank'>Resume</NavLink>
                </div>
                <div className='nav-contact'>
                    {/* <div onClick={this.handleContactModal.bind(this)} id='contact' className='contact'>Contact</div> */}
                    <div onClick={this.handleLocationModal.bind(this)} id='location' className='contact'>Contact</div>
                </div>

                <div id='contactModal' className='modal' style={{
                    display: this.state.contactModal ?
                        'block' : 'none'
                }}>
                    <div className='modal-content'>
                        {/* <div onClick={this.closeContactModal.bind(this)} className='close'>&times;</div> */}
                        <form onSubmit={this.sendEmail} className='email-form'>
                            <div className='names'>
                                <div className='flex-column'>
                                    <div className='label-padding'>First Name*</div>
                                    <input required type='text' className='nameBox'
                                        name='fname'
                                        value={this.state.fname}
                                        onChange={this.onChange}
                                    ></input>
                                </div>
                                <div className='flex-column'>
                                    <div className='label-padding'>Last Name*</div>
                                    <input required type='text' className='nameBox'
                                        name='lname'
                                        value={this.state.lname}
                                        onChange={this.onChange}
                                    ></input>
                                </div>
                            </div>
                            <br />
                            <div className='flex-column'>
                                <div className='label-padding'>Email*</div>
                                <input required type='email' className='longBox'
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                ></input>
                            </div>
                            <br />
                            <div className='flex-column'>
                                <div className='label-padding'>Subject*</div>
                                <input required type='text' className='longBox'
                                    name='subject'
                                    value={this.state.subject}
                                    onChange={this.onChange}
                                ></input>
                            </div>
                            <br />
                            <div className='flex-column'>
                                <div className='label-padding'>Description*</div>
                                <textarea required className='bigBox'
                                    name='description'
                                    value={this.state.description}
                                    onChange={this.onChange}
                                ></textarea>
                            </div>
                            <br />
                            <div className='flex-row-column'>
                                <div className='flex-column'>
                                    <input type='submit' value='Send' className='send-btn pulse-button' />
                                </div>
                                <div className='flex-row'>
                                    <div className='social-container'>
                                        <div className='social'></div>
                                        <div>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/lawrencecwdouglas/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/the_sol_designer/'><FontAwesomeIcon icon={faInstagram} /></a>
                                            {/* <a className='icon' target='_blank' rel='noopener noreferrer' href='https://twitter.com/TheSolDesigner'><FontAwesomeIcon icon={faTwitter} /></a> */}
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/channel/UCWMAk7fyBexv0Mm4gxOaRuw?view_as=subscriber'><FontAwesomeIcon icon={faYoutube} /></a>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.twitch.tv/tr_lonesol'><FontAwesomeIcon icon={faTwitch} /></a>
                                            {/* <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/ShepherdSupreme/?ref=bookmarks'><FontAwesomeIcon icon={faFacebook} /></a> */}
                                            {/* <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.pinterest.com/joxiousdesigns/'><FontAwesomeIcon icon={faPinterest} /></a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-column'>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id='locationModal' className='modal' style={{
                    display: this.state.locationModal ?
                        'block' : 'none'
                }}>
                    <div className='modal-content'>
                        <div onClick={this.closeLocationModal.bind(this)} className='close'>&times;</div>
                        <div className='modal-row'>
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe title='my location' width="1000" height="800" id="gmap_canvas" src="https://maps.google.com/maps?q=506%20W%20Murray%20Rd.%20&t=&z=15&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                                </div>
                            </div>
                            <div className='modal-column padding-left-30'>
                                <div className='location-section-pic padding-15'>
                                    <div className='personal-pic-container'>
                                        <img className='personal-pic-2' alt='ME!' src='../assets/images/personal/Lawrence2.jpg' />
                                    </div>
                                </div>
                                <div className='location-section-1 padding-15'>
                                    <p className='bold-text font-size-25'>Lawrence Douglas</p>
                                    <p className='light-text'>Web Dev | Graphic Design | UIUX</p>
                                </div>
                                <div className='location-section-2 padding-15'>
                                    <p className='bold-text font-size-25'>Home Address: </p>
                                    <p className='light-text'> 506 W Murray Blvd</p>
                                    <p className='light-text'>Salt Lake City, UT, 84123</p>
                                </div>
                                <div className='location-section-1 padding-15'>
                                    <p className='bold-text font-size-25'>Email:</p>
                                    <p className=''><strong>Professional Business:</strong> lawrence.cwd@gmail.com</p>
                                    {/* <p className=''><strong>Personal Business:</strong> theorganizationsinquiries@gmail.com</p>                                     */}
                                </div>
                                <div className='location-section-2 padding-15 padding-top-30'>
                                    <div className='social-container'>
                                        <div className='social'></div>
                                        <div>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/lawrencecwdouglas/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/the_sol_designer/'><FontAwesomeIcon icon={faInstagram} /></a>
                                            {/* <a className='icon' target='_blank' rel='noopener noreferrer' href='https://twitter.com/TheSolDesigner'><FontAwesomeIcon icon={faTwitter} /></a> */}
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.youtube.com/channel/UCWMAk7fyBexv0Mm4gxOaRuw?view_as=subscriber'><FontAwesomeIcon icon={faYoutube} /></a>
                                            <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.twitch.tv/tr_lonesol'><FontAwesomeIcon icon={faTwitch} /></a>
                                            {/* <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/ShepherdSupreme/?ref=bookmarks'><FontAwesomeIcon icon={faFacebook} /></a> */}
                                            {/* <a className='icon' target='_blank' rel='noopener noreferrer' href='https://www.pinterest.com/joxiousdesigns/'><FontAwesomeIcon icon={faPinterest} /></a> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation;