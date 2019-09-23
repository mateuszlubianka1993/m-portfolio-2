import React from 'react';
import '../style/Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-mask">
                <div className="contact-header">
                    <h2>Contact me</h2>
                    <p>lubiankamateusz@gmail.com</p>
                </div>
                <div className="social-container">
                    <div className="social-box">
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fab fa-github"></span>
                        </a>
                    </div>
                    <div className="social-box">
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fab fa-linkedin-in"></span>
                        </a>
                    </div>
                    <div className="social-box">
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fab fa-twitter"></span>
                        </a>
                    </div>
                    <div className="social-box">
                        <a href="#">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span class="fab fa-facebook-f fb-span"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
