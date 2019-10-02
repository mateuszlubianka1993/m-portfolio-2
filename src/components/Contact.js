import React from 'react';
import Particles from 'react-particles-js';
import particlesParams from '../config/particleJsConfig';
import '../style/general.css';
import '../style/Contact.css';

const Contact = () => {
    return (
        <div className="contact-container section-container">
            <div className="contact-mask section-mask">
                <div className="section-content section-content">
                    <div className="contact-header">
                        <h2>Contact me</h2>
                        <p className="contact-email">lubiankamateusz@gmail.com</p>
                    </div>
                    <div className="social-container">
                        <div className="social-box">
                            <a href="https://github.com/mateuszlubianka1993" target="_blank" rel="noopener noreferrer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fab fa-github"></span>
                            </a>
                        </div>
                        <div className="social-box">
                            <a href="https://www.linkedin.com/in/mateuszlubianka/" target="_blank" rel="noopener noreferrer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fab fa-linkedin-in"></span>
                            </a>
                        </div>
                        <div className="social-box">
                            <a href="https://twitter.com/Xiedzu" target="_blank" rel="noopener noreferrer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fab fa-twitter"></span>
                            </a>
                        </div>
                        <div className="social-box">
                            <a href="https://www.facebook.com/MateuszLubianka" target="_blank" rel="noopener noreferrer">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span className="fab fa-facebook-f fb-span"></span>
                            </a>
                        </div>
                    </div>                
                </div>
                <Particles params={particlesParams} className="particles-box"/>
            </div>
        </div>
    )
}

export default Contact
