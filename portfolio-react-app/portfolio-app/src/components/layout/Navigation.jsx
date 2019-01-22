import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../css/navigation.css';
import { StyleSheet, css } from 'aphrodite';
import Resume from '../../documents/Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faTwitch, faYoutube, faTwitter, faPinterest, faFacebook } from '@fortawesome/free-brands-svg-icons';

const screenSize = {
    smartphone: '@media only screen and (max-width: 479px)'
}

const styles = StyleSheet.create({
    nav: {
        zIndex: '1',
        display: 'flex',
        position: 'relative',
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
    },
    modal: {
        zIndex: '10', /* Sit on top */
        position: 'fixed', /* Stay in place */
        overflow: 'auto', /* Enable scroll if needed */
        width: '85vw', /* Full width */
        height: '100%', /* Full height */
        top: '0',
        left: '0',
        backgroundColor: '#fff',
        boxShadow: '5px 0px 20px #fab',
        // animationName: 'animatetop',
        // animationDuration: '1s',
    },
    modal_content: {
        color: '#000',
        backgroundColor: '#fefefe',
        margin: 'auto',
        padding: '25px',
    },
    close: {
        color: '#aaaaaa',
        float: 'right',
        fontSize: '35px',
        fontWeight: 'bolder',
        ':hover': {
            color: '#fab',
            textDecoration: 'none',
            cursor: 'pointer'
        }
    },
    email_form: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        paddingTop: '40px'
    },
    nameBox: {
        display: 'flex',
        flex: '1',
        color: '#fab',
        height: '6vh',
        paddingLeft: '1rem',
        fontSize: '1rem',
        border: '3px solid grey',
        ':focus': {
            border: '2px solid #fab'
        }
    },
    names: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1',
    },
    box_container: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        padding: '5px'
    },
    box_row_container: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1',
        padding: '5px'
    },
    box_social_container: {
        display: 'flex',
        flexDirection: 'row',
        flex: '1',
        justifyContent: 'center',
        padding: '5px'
    },
    longBox: {
        display: 'flex',
        flex: '1',
        color: '#fab',
        height: '6vh',
        paddingLeft: '1rem',
        fontSize: '1rem',
        border: '3px solid grey',
        ':focus': {
            border: '3px solid #fab'
        }
    },
    bigBox: {
        display: 'flex',
        flex: '1',
        color: '#fab',
        height: '10vh',
        padding: '5px',
        fontSize: '1.2rem',
        border: '3px solid grey',
        ':focus': {
            border: '2px solid #fab'
        }
    },
    label_padding: {
        paddingBottom: '5px',
    },
    send_btn: {
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        color: '#000',
        backgroundColor: '#fff',
        width: '10rem',
        height: '7vh',
        padding: '10x',
        textAlign: 'center',
        fontSize: '1rem',
        border: '3px solid grey',
        transition: 'all 0.8s',
        ':hover': {
            color: '#000',
            backgroundColor: '#fab',
            cursor: 'pointer'
        }
    },
    social_container: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        justifyContent: 'center',
        padding: '5px',
        textAlign: 'center',
    },
    social: {
        paddingBottom: '10px'
    },
    icon: {
        color: '#000',
        padding: '5px',
        fontSize: '15px',
        ':hover': {
            color: '#fab'
        }
    }
});

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
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleModal() {
        this.setState({ modal: true });
        localStorage.setItem('modal', 'true');
        var contact = document.getElementById('nav_contact');
        contact.style.pointerEvents = 'none';
        var modal = document.getElementById('myModal').style;
        modal.animation = 'animatetop';
        modal.animationDuration = '1s';
    }

    closeModal() {
        this.setState({ modal: false });
        localStorage.setItem('modal', 'false');
        this.setState({
            fname: '',
            lname: '',
            email: '',
            subject: '',
            description: ''
        });
        var contact = document.getElementById('nav_contact');
        contact.style.pointerEvents = 'auto';
        var modal = document.getElementById('myModal').style;
        modal.animation = 'animatestop';
        modal.animationDuration = '1s';
    }

    render() {
        return (
            <div className={css(styles.nav)}>
                <div className={css(styles.nav_logo)}>LAWRENCE DOUGLAS</div>
                <div className={css(styles.nav_links)}>
                    <Link to='/' className='nav_link active'>Intro</Link>
                    <Link to='/about' className='nav_link active'>About</Link>
                    <Link to='/work' className='nav_link active'>Work</Link>
                    <Link to={Resume} className='nav_link' target='_blank'>Resume</Link>
                </div>
                <div className={css(styles.nav_contact)}>
                    <div onClick={this.handleModal.bind(this)} id='nav_contact' className='nav_contact'>Contact</div>
                </div>
                <div id='myModal' className={css(styles.modal)} style={{
                    display: this.state.modal ?
                        'block' : 'none'
                }}>
                    <div className={css(styles.modal_content)}>
                        <div onClick={this.closeModal.bind(this)} className={css(styles.close)}>&times;</div>
                        <form className={css(styles.email_form)}>
                            <div className={css(styles.names)}>
                                <div className={css(styles.box_container)}>
                                    <div className={css(styles.label_padding)}>First Name*</div>
                                    <input type='text' className={css(styles.nameBox)}
                                        name='fname'
                                        value={this.state.fname}
                                        onChange={this.onChange}
                                    ></input>
                                </div>
                                <div className={css(styles.box_container)}>
                                    <div className={css(styles.label_padding)}>Last Name*</div>
                                    <input type='text' className={css(styles.nameBox)}
                                        name='lname'
                                        value={this.state.lname}
                                        onChange={this.onChange}
                                    ></input>
                                </div>
                            </div>
                            <br />
                            <div className={css(styles.box_container)}>
                                <div className={css(styles.label_padding)}>Email*</div>
                                <input type='email' className={css(styles.longBox)}
                                    name='email'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                ></input>
                            </div>
                            <br />
                            <div className={css(styles.box_container)}>
                                <div className={css(styles.label_padding)}>Subject*</div>
                                <input type='text' className={css(styles.longBox)}
                                    name='subject'
                                    value={this.state.subject}
                                    onChange={this.onChange}
                                ></input>
                            </div>
                            <br />
                            <div className={css(styles.box_container)}>
                                <div className={css(styles.label_padding)}>Description*</div>
                                <textarea className={css(styles.bigBox)}
                                    name='description'
                                    value={this.state.description}
                                    onChange={this.onChange}
                                ></textarea>
                            </div>
                            <br />
                            <div className={css(styles.box_row_container)}>
                                <div className={css(styles.box_container)}>
                                    <input type='submit' value='Send' className={css(styles.send_btn)} />
                                </div>
                                <div className={css(styles.box_social_container)}>
                                    <div className={css(styles.social_container)}>
                                        <div className={css(styles.social)}>Social</div>
                                        <div className={css(styles.platforms)}>
                                            <a id='icons' /*className={css(styles.icon)}*/ className='icon' target='_blank' href='https://www.linkedin.com/in/lawrencecwdouglas/'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                                            <a id='icons' /*className={css(styles.icon)}*/ className='icon' target='_blank' href='https://www.instagram.com/the_sol_designer/'><FontAwesomeIcon icon={faInstagram} /></a>
                                            <a id='icons' /*className={css(styles.icon)}*/ className='icon' target='_blank' href='https://twitter.com/TheSolDesigner'><FontAwesomeIcon icon={faTwitter} /></a>
                                            <a id='icons' /*className={css(styles.icon)}*/ className='icon' target='_blank' href='https://www.youtube.com/channel/UCWMAk7fyBexv0Mm4gxOaRuw?view_as=subscriber'><FontAwesomeIcon icon={faYoutube} /></a>
                                            <a id='icons' /*className={css(styles.icon)}*/ className='icon' target='_blank' href='https://www.twitch.tv/tr_lonesol'><FontAwesomeIcon icon={faTwitch} /></a>
                                            {/* <a className={css(styles.icon)} href='https://www.facebook.com/ShepherdSupreme/?ref=bookmarks'><FontAwesomeIcon icon={faFacebook}/></a> */}
                                            {/* <a className={css(styles.icon)} href='https://www.pinterest.com/joxiousdesigns/'><FontAwesomeIcon icon={faPinterest}/></a> */}
                                        </div>
                                    </div>
                                </div>
                                <div className={css(styles.box_container)}>
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